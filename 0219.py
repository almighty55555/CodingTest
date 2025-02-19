import sys;
input = sys.stdin.readline;

T = int(input().strip())

for i in range(T):
  input()
  N, M = map(int, input().split())
  s_list = list(map(int, sys.stdin.readline().strip().split()))
  b_list = list(map(int, sys.stdin.readline().strip().split()));

  s_list.sort(reverse=True);
  b_list.sort(reverse=True);

  while s_list and b_list:
    if s_list[0] >= b_list[0]:
      b_list.pop(0)
    else:
      s_list.pop(0)

  if s_list:
    print('S');
  elif b_list:
    print('B');
  else:
    print('C')