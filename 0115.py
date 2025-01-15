#반복 횟수 지정
t = int(input());

for i in range(t):
  answer = ''
  r, s = map(str, input().split())
  #문자열 s에 있는 문자마다 r번 반복해 answer에 추가
  for char in s:
    answer += char * int(r)
  print(answer)