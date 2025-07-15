const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(Number(line));
}).on('close', function(){
  let biggest = 0;
  let order = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > biggest) {
      biggest = input[i];
      order = i+1;
    }
  }
  console.log(biggest);
  console.log(order);
  process.exit();
});