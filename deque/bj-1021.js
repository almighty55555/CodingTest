const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line);
}).on('close', function(){
  let [N, M] = input[0].split(' ').map(Number);
  let targets = input[1].split(' ').map(Number);

  let deque = Array.from({ length: N }, (_, i) => i + 1);
  let count = 0;

  for (const target of targets) {
    const idx = deque.indexOf(target);

    if (idx <= Math.floor(deque.length /2)) {
      for (let i = 0; i < idx; i++) {
        deque.push(deque.shift());
        count++;
      }
    } else {
      for (let i = 0; i < deque.length - idx; i++) {
        deque.unshift(deque.pop());
        count++;
      }
    }

    deque.shift();
  }
  console.log(count);
  process.exit();
});