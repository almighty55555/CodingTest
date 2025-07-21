const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = []
let answer = new Array(9);
answer.fill(0);
let max = 0;

readline.on('line', function(line) {
  input = line.split('');
}).on('close', function(){
	for (i of input) {
    if (Number(i) == 9) {
      answer[6] += 1;
    } else {
      answer[Number(i)] += 1;
    }
  }
  answer[6] = Math.ceil(answer[6]/2)
  for (i of answer) {
    if (i >= max) {
      max = i
    }
  };
  console.log(max);
  process.exit();
});