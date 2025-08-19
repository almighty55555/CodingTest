const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line.trim());
}).on('close', function(){
  const T = Number(input[0]);
  let lineNum = 1;
  for (let i = 1; i <= T; i++) {
    const [M, N, K] = input[lineNum].split(' ').map(Number);
    const board = Array.from({ length: N }, () => Array(M).fill(0));
    for (let j = 0; j < K; j++) {
      let [lx, ly] = input[lineNum+j+1].split(' ').map(Number);
      board[ly][lx] = 1;
    }
    lineNum = lineNum + K + 1;
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    const inRange = (y, x) => y >= 0 && y < N && x >= 0 && x < M;

    let count = 0;

    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (board[y][x] === 1 && !visited[y][x]) {
          count++;
          const queue = [[y, x]];
          visited[y][x] = true;

          while (queue.length) {
            const [cy, cx] = queue.shift();
            for (const [dy, dx] of dirs) {
              const ny = cy + dy, nx = cx + dx;
              if (inRange(ny, nx) && board[ny][nx] === 1 && !visited[ny][nx]) {
                visited[ny][nx] = true;
                queue.push([ny, nx]);
              }
            }
          }
        }
      }
    }
    console.log(count);
    }
  process.exit();
}); 