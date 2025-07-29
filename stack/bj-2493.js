const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
  let N = Number(input[0]);
  let heights = input[1].split(' ').map(Number);
  const stack = [];
  const result = Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] < heights[i]) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = stack[stack.length - 1] + 1;
    }
    stack.push(i)
  }

  console.log(result.join(' '))

    process.exit();
});