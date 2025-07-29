const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
    let N = Number(input[0]);
    let array = input[1].split(' ').map(Number);
    let stack = [];
    let result = Array(N).fill(-1);

    for (let i = N-1; i >= 0; i--) {
      while (stack.length > 0 && array[stack[stack.length - 1]] <= array[i]) {
        stack.pop();
      }

      if (stack.length > 0) {
        result[i] = array[stack[stack.length - 1]];
      }

      stack.push(i);
    }

    console.log(result.join(' '))
    process.exit();
});