import sys;
import heapq;

heap = [];

N = int(sys.stdin.readline().strip());
for i in range(N):
  x = int(sys.stdin.readline().strip());
  if x != 0:
    heapq.heappush(heap, (abs(x), x));
  else:
    if heap:
      i, answer = heapq.heappop(heap);
      print(answer)
    else:
      print(0)