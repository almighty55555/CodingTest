const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line);
}).on('close', function(){
  let N = Number(input[0]);
  let count = N
  for (let i = 1; i <= N; i++) {
    let stack = [];
    let word = input[i];
    for (let char of word) {
      if (stack.length == 0) {
        stack.push(char);
      } else if (char !== stack[stack.length - 1]) {
        stack.push(char);
      } else {
        stack.pop();
      }
    }
    if (stack.length !== 0) {
      count -= 1;
    }
  }
  console.log(count)
  process.exit();
});