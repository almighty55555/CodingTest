const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
	let N = Number(input[0]);
  let queue = new Array(N);
  let head = 0;
  let tail = 0;

  let output = [];

  for (let i = 1; i <= N; i++) {
    let [cmd, val] = input[i].split(' ');

    switch (cmd) {
      case 'push':
        queue[tail] = Number(val);
        tail++;
        break;
      case 'pop':
        if (head === tail) {
          output.push(-1)
        } else {
          output.push(queue[head]);
          head++;
        }
        break;
      case 'size':
        output.push(tail-head);
        break;
      case 'empty':
        output.push(head === tail ? 1 : 0);
        break;
      case 'front':
        output.push(head === tail ? -1 : queue[head]);
        break;
      case 'back':
        output.push(head === tail ? -1 : queue[tail-1]);
        break;
    }
  }
  console.log(output.join('\n'))
  process.exit();
});