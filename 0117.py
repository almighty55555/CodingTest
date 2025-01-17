#단어와 단어의 길이를 담을 리스트 생성
words = [];
length = [];

#다섯 개의 단어에 대해 input을 받고 리스트에 추가
for i in range(5):
  word = input();
  words.append(word);
  length.append(len(word));

answer = '';
#가장 긴 길이를 가진 단어의 길이에 대해 동작 반복
for i in range(max(length)):
  for j in range(5):
    #단어의 길이가 동작중인 index보다 길 때만 작동
    if i < length[j]:
      #j번째 단어의 i번째 index를 answer에 추가
      answer += words[j][i]

print(answer);