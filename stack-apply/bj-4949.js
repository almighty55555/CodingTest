const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let bracket_pairs = {")": "(", "]": "["};

readline.on('line', function(line) {
  input.push(line);
}).on('close', function(){
  for (let i = 1; i < input.length; i++) {
    let stack = []
    let balanced = true;
    for (let char of input[i-1]) {
      if (char == "(" | char == "[") {
        stack.push(char);
      } else if (char == ")" | char == "]") {
        if (stack.length == 0 | stack[stack.length - 1] !== bracket_pairs[char]) {
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
      console.log('yes')
    } else {
      console.log('no')
    }
  }
  process.exit();
});