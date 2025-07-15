const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(Number(line));
}).on('close', function(){
  let sorted = input.sort((a, b) => a - b);
  let sum = 0;
  for (let i of sorted) {
    sum += i
  }
  let overHeight = sum - 100;
  for (let i of sorted) {
    for (let j of sorted) {
      if (i + j == overHeight && i!==j && sorted.length == 9) {
        for (let k = 0; k < sorted.length; k++) {
          if (sorted[k] === i) {
            sorted.splice(k, 1);
          }
        }
        for (let l = 0; l < sorted.length; l++) {
          if (sorted[l] === j) {
            sorted.splice(l, 1);
          }
        }
      }
    }
  }
  for (let i of sorted) {
    console.log(i);
  }
  process.exit();
});