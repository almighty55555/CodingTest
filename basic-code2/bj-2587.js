const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(Number(line));
}).on('close', function(){
  let sum = 0;
  for (i of input) {
    sum += i
  }
  console.log(sum/5)
  console.log(input.sort((a, b) => a - b)[2])
  process.exit();
});