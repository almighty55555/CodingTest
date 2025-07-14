#수업의 수, 조건에서 수업의 수 입력
N, M = map(int, input().split())
#학번 중복을 허용하여 저장할 배열과 수업의 수를 세줄 딕셔너리 생성
student = []
counting = {};
answer = 0;

#N개의 수업에 대해 수업을 들을 학생의 학번을 'student' 배열에 추가
for i in range(N):
  student_num = int(input());
  student += input().split();

#'student' 배열에 있는 학번을 딕셔너리의 key로 저장
for students in student:
  if students in counting:
    counting[students] += 1;
  #존재하지 않는 key라면 1로 초기 설정
  else:
    counting[students] = 1;

#딕셔너리의 value, 즉 들은 수업의 수가 M 이상이면 answer에 +1
for num in counting.values():
  if num >= M:
    answer += 1;

print(answer)