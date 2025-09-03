const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
  let N = Number(input);
  const out = [];

  const intro = '어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.';
  const s1 = '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.';
  const s2 = '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.';
  const s3 = '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."';

  const indent = d => '____'.repeat(d);

  function rec(depth) {
    const pre = indent(depth);
    out.push(pre + '"재귀함수가 뭔가요?"');
    if (depth === N) {
      out.push(pre + '"재귀함수는 자기 자신을 호출하는 함수라네"');
      out.push(pre + '라고 답변하였지.');
      return;
    }
    out.push(pre + s1);
    out.push(pre + s2);
    out.push(pre + s3);
    rec(depth + 1);
    out.push(pre + '라고 답변하였지.');
  }

  out.push(intro);
  rec(0);

  console.log(out.join('\n'));
  process.exit();
});