const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;

readline.on('line', function(line) {
  N = Number(line);
}).on('close', function(){
	let queue = [];
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  let head = 0;
  let tail = N;

  while (tail-head > 2) {
    head ++;
    queue[tail++] = queue[head++];
  }

  console.log(queue[tail-1]);
  process.exit();
});