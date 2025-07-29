const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(Number(line));
}).on('close', function(){
  let [K, ...numbers] = input;
  let stack = [];
  let answer = 0;
  for (let num of numbers) {
    if (num !== 0) {
      stack.push(num);
    } else {
      stack.pop();
    }
  }

  for (let i of stack) {
    answer += i;
  }

  console.log(answer);
    process.exit();
});