N, M = map(int, input().split());
#노래 정보들을 담을 빈 딕셔너리 생성
song = {};

for i in range(N):
  T, S, a1, a2, a3, a4, a5, a6, a7 = input().split();
  #각 노래의 첫 세 음만 저장
  A = [a1, a2, a3];
  #딕셔너리의 key는 S, 해당 key의 value로 첫 세 음이 저장된 A 저장
  song[S] = A;

#M번의 문제에 대해 반복
for j in range(M):
  b1, b2, b3 = input().split();
  #문제에 제시된 세 음을 B라는 배열에 저장
  B = [b1, b2, b3];
  #해당 음을 가진 곡의 수를 저장할 answers라는 숫자형 변수 생성
  answers = 0;
  #곡의 수가 하나라면 출력할 정답으로 문자형 변수 생성
  answer = "";

  #song 객체의 key에 대해서
  for s in song:
    #song의 key에 담긴 value값과 문제로 제시된 음이 같다면
    if B == song[s]:
      #해당 음을 가진 곡의 수에 +1
      answers += 1;
      #곡의 이름을 answer에 저장
      answer = s;

  #해당 음을 가진 곡의 수가 2개 이상이라면 ?
  if answers >= 2:
    print("?");
  #해당 음을 가진 곡이 하나라면 바로 정답 출력
  elif answers == 1:
    print(answer);
  #해당 음을 가진 곡이 없다면 !
  else:
    print("!");