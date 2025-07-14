const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
  const odd = [];
  let sum = 0;

	for (a in input) {
    if (Number(input[a])%2 == 1) {
      odd.push(Number(input[a]));
      sum += Number(input[a]);
    }
  }
  if (sum == 0) {
    console.log(-1)
  } else {
    console.log(sum);
    console.log(odd.sort((a, b) => a - b)[0]);
  }
  process.exit();
});