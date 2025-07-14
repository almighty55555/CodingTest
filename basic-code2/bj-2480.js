const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
  const a = input[0];
  const b = input[1];
  const c = input[2];

  if (a==b && b==c) {
    console.log(10000+a*1000);
  } else if (a==b || a==c) {
    console.log(1000+a*100);
  } else if (b==c) {
    console.log(1000+b*100);
  } else {
    const largest = input.sort()[2];
    console.log(largest*100);
  }
  process.exit();
});