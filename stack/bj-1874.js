const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(Number(line));
}).on('close', function(){
  const n = input[0];
  const sequence = input.slice(1);
  const stack = [];
  const result = [];
  let current = 1;
  let isPossible = true;

  for (let num of sequence) {
    while (current <= num) {
      stack.push(current++);
      result.push('+');
    }

    if (stack[stack.length - 1] === num) {
      stack.pop();
      result.push('-');
    } else {
      isPossible = false;
      break;
    }
  }

  if (isPossible) {
    console.log(result.join('\n'));
  } else {
    console.log('NO');
  }
    process.exit();
});