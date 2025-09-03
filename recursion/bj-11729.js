const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;

readline.on('line', function(line) {
  N = parseInt(line.trim(), 10);
}).on('close', function(){
  let cnt = 0;
  let answer = [];

  function hanoi(from, to, height) {
    if (height === 1) {
      answer.push(`${from} ${to}`);
      cnt++;
      return;
    }

    const temp = 6-from-to;
    hanoi(from, temp, height-1);
    hanoi(from, to, 1);
    hanoi(temp, to, height-1);
  }

  hanoi(1, 3, N);
  console.log(cnt + '\n' + answer.join('\n'));
  process.exit();
});