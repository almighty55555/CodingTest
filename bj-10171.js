const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
	console.log(`\\    /\\`)
  console.log(` )  ( ')`)
  console.log(`(  /  )`)
  console.log(` \\(__)|`)
    process.exit();
});