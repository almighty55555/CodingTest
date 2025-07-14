const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	const answer = input.sort((a, b) => a-b);
  console.log(answer.join(' '))
  process.exit();
});