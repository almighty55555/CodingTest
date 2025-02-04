import sys

N = int(sys.stdin.readline().strip())
sticks = list(map(int, sys.stdin.read().split()))

biggest = 0;
answer = 0;

for i in range(N):
  if sticks[N-i-1] > biggest:
    biggest = sticks[N-i-1];
    answer += 1;

print(answer)