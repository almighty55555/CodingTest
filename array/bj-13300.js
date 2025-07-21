const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
const girls = new Array(6);
const boys = new Array(6);
girls.fill(0);
boys.fill(0);

readline.on('line', function(line) {
  input.push(line.split(' '));
}).on('close', function(){
  const N = input[0][0];
  const K = input[0][1];
  for (let i = 1; i<=N; i++) {
    if (input[i][0] == 0) {
      girls[input[i][1]-1]++;
    } else {
      boys[input[i][1]-1]++;
    }
  }
  const sortedBoys = [];
  const sortedGirls = [];

  for (i of girls) {
    sortedGirls.push(Math.ceil(i/K));
  }
  for (j of boys) {
    sortedBoys.push(Math.ceil(j/K));
  }

  const sorted = sortedBoys.concat(sortedGirls);
  
  let count = 0;
  for (i of sorted) {
    count += i;
  }

  console.log(count);
  process.exit();
});