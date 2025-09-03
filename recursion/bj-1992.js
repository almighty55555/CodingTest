const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line);
}).on('close', function(){
  let N = Number(input[0]);
  let paper = Array.from({ length: N }, (_, i) => 
    input[i+1].trim().split('').map(Number)
  );

  let answer = ''

  function paperCount(n, r, c) {
    const first = paper[r][c];
    let same = true;

    for (let i = r; i < r + n; i++) {
      if (!same) break;
      for (let j = c; j < c + n; j++) {
        if (paper[i][j] !== first) {
          same = false;
          break;
        }
      }
    }
    if (same) {
      answer += [String(first)]
      return;
    }

    const m = n/2;
    answer += '('
    for (let dr = 0; dr < 2; dr++) {
      for (let dc = 0; dc < 2; dc++) {
        paperCount(m, r+dr*m, c+dc*m);
      }
    }
    answer += ')'
  }

  paperCount(N, 0, 0);
  console.log(answer)
  process.exit();
});