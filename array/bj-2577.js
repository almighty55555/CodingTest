const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let answer = new Array(10);
answer.fill(0);

readline.on('line', function(line) {
    input.push(Number(line));
}).on('close', function(){
	let multiple = String(input[0] * input[1] * input[2]).split('');
  for (i of multiple) {
    index = Number(i);
    answer[index] += 1;
  }
  answer.forEach((element) => console.log(element));
  process.exit();
});