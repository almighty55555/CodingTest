const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let S = [];
let firstWord = new Array(26);
firstWord.fill(0);
let secondWord = new Array(26);
secondWord.fill(0);
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

readline.on('line', function(line) {
  S.push(line.split(''))
}).on('close', function(){
	for (i of S[0]) {
    let index = alphabet.indexOf(i);
    firstWord[index] += 1;
  }
  for (i of S[1]) {
    let index = alphabet.indexOf(i);
    secondWord[index] += 1;
  }
  let count = 0;
  for (let j = 0; j < 26; j++) {
    if (firstWord[j] !== secondWord[j]) {
      count += Math.abs(firstWord[j] - secondWord[j]);
    }
  }

  console.log(count);
    process.exit();
});