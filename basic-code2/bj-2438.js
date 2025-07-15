const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

readline.on('line', function(line) {
  input = Number(line);
}).on('close', function(){
	for (let i = 1; i <= input; i++) {
    let answer = '';
    for (let j = 1; j <= i; j++) {
      answer += '*';
    }
    console.log(answer);
  }
  process.exit();
});