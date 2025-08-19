const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
  const [N, K] = input;
  let move = (x) => [x-1, x+1, 2*x];
  const queue = [N];
  let head = 0;
  
  const max = 100000 * 2;
  const visited = Array(max + 1).fill(-1);

  visited[N] = 0;
  while (head < queue.length) {
    let now = queue[head++];
    if (now == K) break;

    for (let next of move(now)) {
      if (next <= max && next >= 0 && visited[next] == -1) {
        visited[next] = visited[now] + 1;
        queue.push(next);
      }
    }
  }
  console.log(visited[K]);
  process.exit();
});