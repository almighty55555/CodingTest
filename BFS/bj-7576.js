const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line.trim());
}).on('close', function(){
  const [m, n] = input[0].split(' ').map(Number);
  const board = [];
  for (let i = 1; i <= n; i++) {
    board.push(input[i].split(' ').map(Number));
  }

  const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
  const inRange = (y, x) => y >= 0 && y < n && x >= 0 && x < m;
  let queue = []
  let head = 0;

  let cnt = 0;
  for (let y = 0; y < n ; y++) {
    for (let x = 0; x < m ; x++) {
      if (board[y][x] == 1) {
        queue.push([y, x]);
      }
    }
  }

  while (head < queue.length) {
    const [cy, cx] = queue[head++];
    for (const [dy, dx] of dirs) {
      let ny = cy + dy, nx = cx + dx;
      if (inRange(ny, nx) && board[ny][nx] == 0) {
        board[ny][nx] = board[cy][cx] + 1;
        queue.push([ny, nx]);
      }
    }
  }

  let foundZero = false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] == 0) {
        cnt = -1;
        foundZero = true;
        break;
      } else if (cnt >= 0) {
        const res = board[i][j] - 1;
        if (res > cnt) {
          cnt = res;
        }
      }
      if (foundZero) break;
    }
  }

  console.log(cnt)

  process.exit();
}); 