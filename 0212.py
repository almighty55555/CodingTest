import sys;
import heapq;

n = int(sys.stdin.readline().strip());
heap = [];

for i in range(n):
  a = sys.stdin.readline().strip().split();
  if int(a[0]) != 0:
    for i in range(int(a[0])):
      heapq.heappush(heap, -int(a[i+1]));
  else:
    if not heap:
      print(-1);
    else:
      print(-heapq.heappop(heap))