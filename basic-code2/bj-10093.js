const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
  const [a, b] = input.sort((x, y) => x - y);
  if (a==b) {
    console.log(0);
  } else {
    console.log(b-a-1);
  };
  let answer = []
  for (let i = a+1; i < b; i++) {
    answer.push(i);
  }
  console.log(answer.join(' '))
  process.exit();
});