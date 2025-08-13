const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line);
}).on('close', function(){
  let T = Number(input[0])
  for (let i = 1; i <= T; i++) {
    let stack = []
    let balanced = true;
    for (let char of input[i]) {
      if (char == "(") {
        stack.push(char);
      } else if (char == ")") {
        if (stack.length == 0 | stack[stack.length - 1] !== "(") {
          balanced = false;
          break
        }
        stack.pop();
      }
    }
    if (stack.length !== 0) {
      balanced = false;
    }
    if (balanced) {
      console.log('YES')
    } else {
      console.log('NO')
    }
  }
  process.exit();
});