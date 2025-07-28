const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
	let [N, ...command] = input;
  for (let cmd of command) {
    let left = [];
    let right = [];
    let pwInput = cmd.split('');
    for (let key of pwInput) {
      if (key === '<') {
        if (left.length > 0) right.push(left.pop());
      } else if (key === '>') {
        if (right.length > 0) left.push(right.pop());
      } else if (key === '-') {
        if (left.length > 0) left.pop();
      } else {
        left.push(key);
      }
    }
    console.log(left.concat(right.reverse()).join(''))
  }
    process.exit();
});