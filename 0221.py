import sys;
import math;
import heapq;

N, M, K = map(int, sys.stdin.readline().strip().split());
D = []

for i in range(N):
  D.append(-int(sys.stdin.readline().strip()));

heapq.heapify(D)
days = 0;
Y = [0];

while D and D[0] < -K:
  max_task = -heapq.heappop(D)
  Y.append(math.floor(Y[-1]/2 + max_task))
  max_task -= M
  
  if max_task > K:
    heapq.heappush(D, -max_task)

  days += 1;

print(days)
for i in range(1, len(Y)):
  print(Y[i])