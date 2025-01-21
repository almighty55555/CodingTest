L = int(input());
M = 1234567891;
r = 31;
answer = 0;
user_input = input();

for i in range(L):
  #아스키코드값을 활용해서 각 문자에 대한 아스키코드를 구해준다.
  num = ord(user_input[i]) - ord('a') + 1;
  #아스키코드값에 대해 함수값을 계산하여 answer에 추가
  answer += num * (r ** i)

#answer를 M으로 나눈 나머지가 답이 된다.
print(answer % M)