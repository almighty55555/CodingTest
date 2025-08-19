const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line.trim());
}).on('close', function(){
  const [m, n, h] = input[0].split(' ').map(Number);
  const board = [];
  for (let i = 1; i <= h; i++) {
    const box = [];
    for (let j = 1; j <= n; j++) {
      box.push(input[n*(i-1) + j].split(' ').map(Number));
    }
    board.push(box)
  }

  const dirs = [[1,0,0], [-1,0,0], [0,1,0], [0,-1,0], [0,0,1], [0,0,-1]];
  const inRange = (t, y, x) => t >= 0 && t < h && y >= 0 && y < n && x >= 0 && x < m;
  let queue = []
  let head = 0;

  let cnt = 0;
  for (let t = 0; t < h; t++) {
    for (let y = 0; y < n ; y++) {
      for (let x = 0; x < m ; x++) {
        if (board[t][y][x] == 1) {
          queue.push([t, y, x]);
        }
      }
    }
  }

  while (head < queue.length) {
    const [ct, cy, cx] = queue[head++];
    for (const [dt, dy, dx] of dirs) {
      let nt = ct + dt, ny = cy + dy, nx = cx + dx;
      if (inRange(nt, ny, nx) && board[nt][ny][nx] == 0) {
        board[nt][ny][nx] = board[ct][cy][cx] + 1;
        queue.push([nt, ny, nx]);
      }
    }
  }

  let foundZero = false;

  for (let k = 0; k < h; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[k][i][j] == 0) {
          cnt = -1;
          foundZero = true;
          break;
        } else if (cnt >= 0) {
          const res = board[k][i][j] - 1;
          if (res > cnt) {
            cnt = res;
          }
        }
        if (foundZero) break;
      }
    }
  }

  console.log(cnt)

  process.exit();
}); 