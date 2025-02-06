import sys;
from collections import deque;

n = int(sys.stdin.readline().strip());

que = deque();
get_want = [];
get_unwant = [];
get_none = [];

for i in range(n):
  command = list(map(int, sys.stdin.readline().strip().split()));
  if command[0] == 1:
    student_id, fav_menu = command[1], command[2]
    que.append((student_id, fav_menu))
  else:
    served_menu = command[1]
    if que:
      student_id, fav_menu = que.popleft()
      if fav_menu == served_menu:
        get_want.append(student_id)
      else:
        get_unwant.append(student_id)

while que:
  get_none.append(que.popleft()[0])

get_want.sort();
get_unwant.sort();
get_none.sort();

print(" ".join(map(str, get_want)) if get_want else "None")
print(" ".join(map(str, get_unwant)) if get_unwant else "None")
print(" ".join(map(str, get_none)) if get_none else "None")