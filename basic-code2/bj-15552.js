const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
  const T = parseInt(input[0]);
  let output = [];

  for (let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    output.push(A + B);
  }

  console.log(output.join('\n'));
  process.exit();
});