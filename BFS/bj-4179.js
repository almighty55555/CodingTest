const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
readline.on('line', (line) => input.push(line)).on('close', () => {
  const [R, C] = input[0].split(' ').map(Number);
  const boards = [];
  for (let i = 1; i <= R; i++) boards.push(input[i].split(''));

  const dirs = [[1,0],[0,1],[-1,0],[0,-1]];
  const inRange = (y, x) => y >= 0 && y < R && x >= 0 && x < C;

  const distF = Array.from({ length: R }, () => Array(C).fill(-1));
  const distJ = Array.from({ length: R }, () => Array(C).fill(-1));

  const fq = [];
  let fhead = 0;

  const jq = [];
  let jhead = 0;

  let sy = -1, sx = -1;

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (boards[i][j] === 'F') {
        distF[i][j] = 0;
        fq.push([i, j]);
      } else if (boards[i][j] === 'J') {
        sy = i; sx = j;
      }
    }
  }

  while (fhead < fq.length) {
    const [cy, cx] = fq[fhead++];
    for (const [dy, dx] of dirs) {
      const ny = cy + dy, nx = cx + dx;
      if (!inRange(ny, nx)) continue;
      if (boards[ny][nx] === '#') continue;
      if (distF[ny][nx] !== -1) continue;
      distF[ny][nx] = distF[cy][cx] + 1;
      fq.push([ny, nx]);
    }
  }

  distJ[sy][sx] = 0;
  jq.push([sy, sx]);

  if (sy === 0 || sy === R - 1 || sx === 0 || sx === C - 1) {
    console.log(1);
    process.exit(0);
  }

  while (jhead < jq.length) {
    const [cy, cx] = jq[jhead++];
    for (const [dy, dx] of dirs) {
      const ny = cy + dy, nx = cx + dx;
      if (!inRange(ny, nx)) {
        console.log(distJ[cy][cx] + 1);
        process.exit(0);
      }
      if (boards[ny][nx] === '#') continue;
      if (distJ[ny][nx] !== -1) continue;

      const nextTime = distJ[cy][cx] + 1;

      if (distF[ny][nx] !== -1 && distF[ny][nx] <= nextTime) continue;

      distJ[ny][nx] = nextTime;
      jq.push([ny, nx]);
    }
  }

  console.log('IMPOSSIBLE');
  process.exit(0);
});
