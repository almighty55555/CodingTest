const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

readline.on('line', function(line) {
  input = line;
}).on('close', function(){
  let stick = 0;
  let count = 0;
  let length = input.length;
  for (let i = 0; i < length; i++) {
    if (input[i] == '(' && input[i+1] == ')') {
      count += stick;
      i++;
    } else if (input[i] == '(') {
      stick += 1;
    } else if (input[i] == ')') {
      stick -= 1;
      count += 1;
    }
  }
  console.log(count);
  process.exit();
});