const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	A = input[0];
  B = input[1];
  console.log(A+B);
  console.log(A-B);
  console.log(A*B);
  console.log((A-(A%B))/B);
  console.log(A%B);
    process.exit();
});