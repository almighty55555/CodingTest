#덱의 개수 받기
N = int(input())

#card를 빈 객체로 설정
card = {}
for i in range(N):
    s, x = map(str, input().split())
    #card 안에 입력받은 과일 key가 있을 때
    if s in card: 
      #그 key에 해당하는 value에 x(카드 과일 개수)만큼 추가
      card[s] += int(x)
    #처음 입력받는 과일 key라면
    else: 
      #새로 key 만들어서 x만큼 value 부여
      card[s] = int(x)

#card의 value 중에 5가 있다면 YES
if 5 in card.values(): 
    print("YES")
else: 
    print("NO")