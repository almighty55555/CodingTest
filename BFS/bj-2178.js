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
    board.push(input[i].split('').map(Number));
  }

  const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
  const inRange = (y, x) => y >= 0 && y < n && x >= 0 && x < m;

  const queue = [[0, 0]];
  while (queue.length) {
    const [y, x] = queue.shift();
    for (const [dy, dx] of dirs) {
      const ny = y + dy, nx = x + dx;
      if (inRange(ny, nx) && board[ny][nx] == 1) {
        queue.push([ny, nx]);
        board[ny][nx] = board[y][x] + 1
      }
    }
  }
  console.log(board[n-1][m-1]);
  process.exit();
}); 