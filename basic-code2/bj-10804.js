const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
  const [a1, b1] = input[0].split(' ').map(Number);
  const [a2, b2] = input[1].split(' ').map(Number);
  const [a3, b3] = input[2].split(' ').map(Number);
  const [a4, b4] = input[3].split(' ').map(Number);
  const [a5, b5] = input[4].split(' ').map(Number);
  const [a6, b6] = input[5].split(' ').map(Number);
  const [a7, b7] = input[6].split(' ').map(Number);
  const [a8, b8] = input[7].split(' ').map(Number);
  const [a9, b9] = input[8].split(' ').map(Number);
  const [a10, b10] = input[9].split(' ').map(Number);

  const a = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
  const b = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10];

  let card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  let change = []

  for (let k = 0; k < 10; k++) {
    change = []
    for (let i = a[k]-1; i < b[k]; i++) {
      change.unshift(card[i]);
    }
    for (let j = 0; j < change.length; j++) {
      card.splice(a[k]-1+j, 1, change[j])
    }
  }
  console.log(card.join(' '))
  process.exit();
});