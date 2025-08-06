const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line);
}).on('close', function(){
  let N = Number(input[0]);
  let deque = new Array(2*N);
  let head = N+1;
  let tail = N+1;
  let output = [];

  for (let i = 1; i <= N; i++) {
    let [cmd, val] = input[i].split(' ');

    switch (cmd) {
      case 'push_front':
        deque[head-1] = val;
        head--;
        break;
      case 'push_back':
        deque[tail] = val;
        tail++;
        break;
      case 'pop_front':
        if (head == tail) {
          output.push(-1)
        } else {
          output.push(deque[head]);
          head++;
        }
        break;
      case 'pop_back':
        if (head == tail) {
          output.push(-1)
        } else {
          output.push(deque[tail-1]);
          tail--;
        }
        break;
      case 'size':
        output.push(tail-head);
        break;
      case 'empty':
        output.push(tail == head ? 1 : 0);
        break;
      case 'front':
        output.push(tail == head ? -1 : deque[head]);
        break;
      case 'back':
        output.push(tail == head ? -1 : deque[tail-1]);
        break;
    }
  }
  console.log(output.join('\n'));
  process.exit();
});