const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
	const [N, X] = input[0].split(' ').map(Number);
    const A = input[1].split(' ').map(Number);

    const result = A.filter(num => num < X).join(' ');
    console.log(result);
    
    process.exit();
});