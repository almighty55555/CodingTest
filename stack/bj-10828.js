const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
	let [N, ...commands] = input;
  let stack = [];
  let result = [];

  for (let i = 0; i < N; i++) {
    let command = commands[i].split(' ');
    if (command[0] == 'push') {
      stack.push(command[1]);
    } else if (command == 'pop') {
      if (stack.length > 0) {
        result.push(stack.pop())
      } else {
        result.push(-1);
      }
    } else if (command == 'size') {
      result.push(stack.length)
    } else if (command == 'empty') {
      if (stack.length > 0) {
        result.push(0)
      } else {
        result.push(1)
      }
    } else if (command == 'top') {
      if (stack.length > 0) {
        let length = stack.length;
        result.push(stack[length-1]);
      } else {
        result.push(-1);
      }
    }
  }
  console.log(result.join('\n'));
    process.exit();
});