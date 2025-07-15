const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
	const N = Number(input[0]);
  const calls = input[1].split(' ').map(Number);
  let Y = 0;
  let M = 0;

  for (let i = 0; i < N; i++) {
    Y += ((calls[i] - calls[i]%30)/30 + 1) * 10;
    M += ((calls[i] - calls[i]%60)/60 + 1) * 15;
  };

  if (Y == M) {
    console.log(`Y M ${Y}`)
  } else if (Y < M) {
    console.log(`Y ${Y}`)
  } else if (Y > M) {
    console.log(`M ${M}`)
  }
  process.exit();
});