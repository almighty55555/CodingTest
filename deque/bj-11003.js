const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line);
}).on('close', function(){
  let [N, L] = input[0].split(' ').map(Number);
  let A = input[1].split(' ').map(Number);

  let deque = [];
  let output = [];

  for (let i = 0; i < N; i++) {
    while (deque.length && A[deque[deque.length - 1]] > A[i]) {
      deque.pop();
    }

    deque.push(i);

    if (deque[0] < i - L + 1) {
      deque.shift();
    }
    
    output.push(A[deque[0]]);
  }
  console.log(output.join(' '));
  process.exit();
});