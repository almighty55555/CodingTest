const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line);
}).on('close', function(){
  const T = Number(input[0]);
  let answer = [];
  for (let i = 1; i <= T; i++) {
    let I = Number(input[3*(i-1) + 1]);
    let [sx, sy] = input[3*(i-1) + 2].split(' ').map(Number);
    let [fx, fy] = input[3*i].split(' ').map(Number);

    const dirs = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, 2], [-1, -2], [-2, -1], [-2, 1]];
    const inRange = (y, x) => y >= 0 && y < I && x >= 0 && x < I;

    let visited = Array.from({length: I}, () => Array(I).fill(-1));
    visited[sy][sx] = 0;

    let queue = [[sy, sx]];
    let head = 0;

    while (queue.length > head) {
      let [cy, cx] = queue[head++];
      for (let [dy, dx] of dirs) {
        let ny = cy + dy, nx = cx + dx;
        if (inRange(ny, nx) && visited[ny][nx] == -1) {
          visited[ny][nx] = visited[cy][cx] + 1;
          queue.push([ny, nx]);
        }
      }
      if (visited[fy][fx] != -1) {
        answer.push(visited[fy][fx]);
        break;
      }
    }
  }
  console.log(answer.join('\n'))
  process.exit(0);
});