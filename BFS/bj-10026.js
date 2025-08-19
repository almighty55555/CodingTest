const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line);
}).on('close', function(){
  const N = Number(input[0]);
  const board = [];
  for (let i = 1; i <= N; i++) {
    board.push(input[i].split(''))
  };

  const answer = [];
  let visited = Array.from({length: N}, () => Array(N).fill(false));

  let rq = [];
  let rhead = 0;
    
  let gq = [];
  let ghead = 0;

  let bq = [];
  let bhead = 0;

  const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  const inRange = (y, x) => y >= 0 && y < N && x >= 0 && x < N;

  let counta = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] == 'R' && !visited[i][j]) {
        counta++;
        rq.push([i, j]);
        visited[i][j] = true;

        while (rq.length > rhead) {
          const [cy, cx] = rq[rhead++];
          for (let [dy, dx] of dirs) {
            let ny = cy + dy, nx = cx + dx;
            if (inRange(ny, nx) && !visited[ny][nx] && board[ny][nx] == 'R') {
              rq.push([ny, nx]);
              visited[ny][nx] = true;
            }
          }
        }
      }
      if (board[i][j] == 'G' && !visited[i][j]) {
        counta++;
        gq.push([i, j]);
        visited[i][j] = true;

        while (gq.length > ghead) {
          const [cy, cx] = gq[ghead++];
          for (let [dy, dx] of dirs) {
            let ny = cy + dy, nx = cx + dx;
            if (inRange(ny, nx) && !visited[ny][nx] && board[ny][nx] == 'G') {
              gq.push([ny, nx]);
              visited[ny][nx] = true;
            }
          }
        }
      }
      if (board[i][j] == 'B' && !visited[i][j]) {
        counta++;
        bq.push([i, j]);
        visited[i][j] = true;

        while (bq.length > bhead) {
          const [cy, cx] = bq[bhead++];
          for (let [dy, dx] of dirs) {
            let ny = cy + dy, nx = cx + dx;
            if (inRange(ny, nx) && !visited[ny][nx] && board[ny][nx] == 'B') {
              bq.push([ny, nx]);
              visited[ny][nx] = true;
            }
          }
        }
      }
    }
  }
  answer.push(counta);

  for (let i = 0; i < N; i++) {
    for (let j = 0 ; j < N; j++) {
      if (board[i][j] == 'G') {
        board[i][j] = 'R'
      }
    }
  }

  visited = Array.from({length: N}, () => Array(N).fill(false));

  rq = [];
  rhead = 0;

  bq = [];
  bhead = 0;

  let countb = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] == 'R' && !visited[i][j]) {
        countb++;
        rq.push([i, j]);
        visited[i][j] = true;

        while (rq.length > rhead) {
          const [cy, cx] = rq[rhead++];
          for (let [dy, dx] of dirs) {
            let ny = cy + dy, nx = cx + dx;
            if (inRange(ny, nx) && !visited[ny][nx] && board[ny][nx] == 'R') {
              rq.push([ny, nx]);
              visited[ny][nx] = true;
            }
          }
        }
      }
      if (board[i][j] == 'B' && !visited[i][j]) {
        countb++;
        bq.push([i, j]);
        visited[i][j] = true;

        while (bq.length > bhead) {
          const [cy, cx] = bq[bhead++];
          for (let [dy, dx] of dirs) {
            let ny = cy + dy, nx = cx + dx;
            if (inRange(ny, nx) && !visited[ny][nx] && board[ny][nx] == 'B') {
              bq.push([ny, nx]);
              visited[ny][nx] = true;
            }
          }
        }
      }
    }
  }
  answer.push(countb);

  console.log(answer.join(' '))

  process.exit();
});