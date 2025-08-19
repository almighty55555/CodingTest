const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line.trim());
}).on('close', function(){
  const [M, N, K] = input[0].split(' ').map(Number);
  const board = Array.from({length: M}, () => Array(N).fill(1));
  
  for (let i = 1; i <= K; i++) {
    const [sx, sy, fx, fy] = input[i].split(' ').map(Number);
    for (let i = sx; i < fx; i++) {
      for (let j = sy; j < fy; j++) {
        board[j][i] = 0;
      }
    }
  }

  const visited = Array.from({ length: M }, () => Array(N).fill(false));
  const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
  const inRange = (y, x) => y >= 0 && y < M && x >= 0 && x < N;

  let areas = [];

  for (let y = 0; y < M; y++) {
    for (let x = 0; x < N; x++) {
      if (board[y][x] === 1 && !visited[y][x]) {
        let area = 0;
        const queue = [[y, x]];
        visited[y][x] = true;

        while (queue.length) {
          const [cy, cx] = queue.shift();
          area++;
          for (const [dy, dx] of dirs) {
            const ny = cy + dy, nx = cx + dx;
            if (inRange(ny, nx) && board[ny][nx] === 1 && !visited[ny][nx]) {
              visited[ny][nx] = true;
              queue.push([ny, nx]);
            }
          }
        }
        areas.push(area);
      }
    }
  }
  console.log(areas.length);
  areas.sort((a, b) => a - b)
  console.log(areas.join(' '))
  process.exit();
}); 