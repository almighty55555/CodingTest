const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line.split(' '));
}).on('close', function(){
  const N = Number(input[0]);
  for (let i = 1; i<=N; i++) {
    let firstSort = input[i][0].split('').sort();
    let secondSort = input[i][1].split('').sort();
    if (firstSort.join('') == secondSort.join('')) {
      console.log('Possible');
    } else {
      console.log('Impossible');
    }
  }
  process.exit();
});