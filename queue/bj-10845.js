const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
	let N = Number(input[0]);
    let queue = [];
    let output = [];

    for (let i = 1; i <= N; i++) {
        const [cmd, val] = input[i].split(' ');

        switch (cmd) {
            case 'push':
                queue.push(Number(val));
                break;
            case 'pop':
                output.push(queue.length ? queue.shift() : -1);
                break;
            case 'size':
                output.push(queue.length);
                break;
            case 'empty':
                output.push(queue.length === 0 ? 1 : 0);
                break;
            case 'front':
                output.push(queue.length ? queue[0] : -1);
                break;
            case 'back':
                output.push(queue.length ? queue[queue.length - 1] : -1);
                break;
        }
    }
    console.log(output.join('\n'))
    process.exit();
});