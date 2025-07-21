const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line.trim());
}).on('close', function(){
	const n = Number(input[0]);
  const array = input[1].split(' ').map(Number);
  const x = Number(input[2]);

  array.sort((a, b) => a - b);

  let start = 0;
  let end = n-1;
  let count = 0;

  while (start < end) {
    const sum = array[start] + array[end];
    if (sum == x) {
      count++;
      start++;
      end--;
    } else if (sum < x) {
      start++;
    } else {
      end--;
    }
  }

  console.log(count);
  process.exit();
});