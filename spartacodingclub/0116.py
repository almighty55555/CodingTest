#줄의 수와 줄의 길이 입력력
n, m = map(int, input().split());

for i in range(n):
  after = '';
  before = str(input());
  for j in range(m):
    #before의 마지막부터 하나씩 after에 추가
    after += before[m-1-j];
  print(after);