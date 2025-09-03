const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
  const [a, b, c] = input;
  let A = BigInt(a);
  let B = BigInt(b);
  let C = BigInt(c);

  function pow(x, y) {
    if (y === 1n) {
      return (x % C)
    } else if (y%2n === 0n) {
      let half = (y / 2n);
      let sq = pow(x, half);
      return (sq * sq)%C;
    } else {
      let half = ((y-1n) / 2n);
      let sq = pow(x, half);
      return (sq * sq * x)%C;
    }
  }

  console.log(pow(A, B).toString())
  process.exit();
});