const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
	const [x1, x2, x3, x4] = input[0].split(' ').map(Number);
  const [y1, y2, y3, y4] = input[1].split(' ').map(Number);
  const [z1, z2, z3, z4] = input[2].split(' ').map(Number);

  const first = x1 + x2 + x3 + x4;
  const second = y1 + y2 + y3 + y4;
  const third = z1 + z2 + z3 + z4;

  switch (first) {
    case 0:
      console.log('D');
      break;
    case 1:
      console.log('C');
      break;
    case 2:
      console.log('B');
      break;
    case 3:
      console.log('A');
      break;
    case 4:
      console.log('E');
      break;
  }

  switch (second) {
    case 0:
      console.log('D');
      break;
    case 1:
      console.log('C');
      break;
    case 2:
      console.log('B');
      break;
    case 3:
      console.log('A');
      break;
    case 4:
      console.log('E');
      break;
  }

  switch (third) {
    case 0:
      console.log('D');
      break;
    case 1:
      console.log('C');
      break;
    case 2:
      console.log('B');
      break;
    case 3:
      console.log('A');
      break;
    case 4:
      console.log('E');
      break;
  }
    
    process.exit();
});