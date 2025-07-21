const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line.trim());
}).on('close', function(){
  const N = Number(input[0]);
  const array = input[1].split(' ').map(Number);
  const v = Number(input[2]);
  let count = 0;

  for (i of array) {
    if (i == v) {
      count++;
    }
  };

  console.log(count);
  process.exit();
});