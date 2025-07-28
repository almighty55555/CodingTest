const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
  let [initial, m, ...commands] = input;
  let left = initial.split('');
  let right = [];

  for (let cmd of commands) {
    if (cmd === 'L') {
      if (left.length > 0) right.push(left.pop());
    } else if (cmd === 'D') {
      if (right.length > 0) left.push(right.pop());
    } else if (cmd === 'B') {
      if (left.length > 0) left.pop();
    } else if (cmd.startsWith('P')) {
      let [, char] = cmd.split(' ');
      left.push(char);
    }
  }

  console.log(left.concat(right.reverse()).join(''));
    process.exit();
});