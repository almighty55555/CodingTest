def solution(s):
  answer = True
  #p의 개수와 y의 개수 0으로 초기 설정
  num_p = 0
  num_y = 0
  #대문자와 소문자를 한 번에 처리하기 위해 문자열을 모두 소문자로 변경
  string = s.lower()
  
  #문자의 개수만큼 반복, 조건문으로 p와 y의 개수 카운팅
  for i in range(0,len(string)):
    if string[i] == 'p':
      num_p += 1
      i += 1
    elif string[i] == 'y':
      num_y += 1
      i += 1
    else:
      i += 1

  #num_p와 num_y 값 비교해서 True 또는 False의 값 도출
  if num_p == num_y:
    answer = True
  else:
    answer = False
      
  #정답 리턴
  return answer