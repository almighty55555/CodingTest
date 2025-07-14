import sys;
import heapq;

N, M = map(int, sys.stdin.readline().strip().split());
order = [[] for _ in range(200_001)];

for i in range(N):
  k, *items = map(int, sys.stdin.readline().strip().split())
  for item in items:
    heapq.heappush(order[item], i)

menu = list(map(int, sys.stdin.readline().strip().split()))
cnt = [0] * N;

for sushi in menu:
  if order[sushi]:
    cnt[heapq.heappop(order[sushi])] += 1;

print(*cnt, sep=' ')

