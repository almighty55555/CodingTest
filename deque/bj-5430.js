const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let output = [];

readline.on('line', function(line) {
  input.push(line);
}).on('close', function(){
  let T = Number(input[0]);
  for (let i = 1; i <= T; i++) {
    let p = input[3*i-2].split('');
    let n = Number(input[3*i-1]);
    let length = input[3*i].length;
    let question = (length != 2) ? input[3*i].slice(1, length-1).split(',').map(Number) : [];
    
    let isReversed = false;
    let isError = false;

    for (let cmd of p) {
      switch (cmd) {
        case 'R':
          isReversed = !isReversed;
          break;
        case 'D':
          if (question.length == 0) {
            isError = true;
          } else if (isReversed) {
            question.pop();
          } else {
            question.shift();
          }
      }
    }

    if (isError) {
      output.push('error');
    } else {
      if (isReversed) {
        question.reverse();
      }
      output.push(`[${question.join(',')}]`);
    }
  }
  console.log(output.join('\n'))
  process.exit();
});