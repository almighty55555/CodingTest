const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(Number);
}).on('close', function(){
  const [N, K] = input;
  const people = [];
  const result = [];

  for (let i = 1; i <= N; i++) {
    people.push(i);
  }

  let index = 0;
  while (people.length > 0) {
    index = (index + K - 1) % people.length;
    result.push(people.splice(index, 1)[0]);
  }

  console.log(`<${result.join(', ')}>`);
    process.exit();
});