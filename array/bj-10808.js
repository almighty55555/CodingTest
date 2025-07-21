const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let S = [];
let answer = new Array(26);
answer.fill(0);
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

readline.on('line', function(line) {
  S = line.split('');
}).on('close', function(){
	for (i in S) {
    let index = alphabet.indexOf(S[i]);
    answer[index] += 1;
  }
  console.log(answer.join(' '));
    process.exit();
});