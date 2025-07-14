N = int(input());
#전체 재료와 하나를 빼먹은 재료를 리스트 형태로 저장
ingredient = list(input().split());
forget = list(input().split());

for i in range(N-1):
  #하나를 빼먹은 재료 리스트의 요소를 전체 재료 리스트에서 제거
  ingredient.remove(forget[i]);

#전체 재료에 남은 하나의 재료 출력
print(ingredient[0])