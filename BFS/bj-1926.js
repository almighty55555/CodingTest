const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line.trim());
}).on('close', function(){
  const [n, m] = input[0].split(' ').map(Number);
  const board = [];
  for (let i = 1; i <= n; i++) {
    board.push(input[i].split(' ').map(Number));
  }

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
  const inRange = (y, x) => y >= 0 && y < n && x >= 0 && x < m;

  let count = 0;
  let maxArea = 0;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (board[y][x] === 1 && !visited[y][x]) {
        count++;
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
        if (area > maxArea) {
          maxArea = area;
        }
      }
    }
  }
  console.log(count);
  console.log(maxArea);
  process.exit();
}); 