const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
  const [N, r, c] = input;
  
  function zIndex(n, r, c) {
    if (n === 0) return 0;
    const half = 1 << (n-1);
    const block = half * half;

    if (r<half && c<half) {
      return zIndex(n-1, r, c);
    } else if (r<half && c>=half) {
      return block + zIndex(n-1, r, c-half);
    } else if (r>=half && c<half) {
      return 2*block + zIndex(n-1, r-half, c);
    } else {
      return 3*block + zIndex(n-1, r-half, c-half);
    }
  }

  console.log(zIndex(N, r, c))
  process.exit();
});