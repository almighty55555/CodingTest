const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(Number(line));
}).on('close', function(){
    let [N, ...heights] = input;
    let stack = []
    let result = 0;

    for (let i = 0; i<N; i++) {
      while (stack.length > 0 && heights[i] >= heights[stack[stack.length - 1]]) {
        stack.pop();
      }

      result += stack.length;
      stack.push(i);
    }

    console.log(result);
    process.exit();
});