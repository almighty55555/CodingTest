import sys;

N1, N2 = map(int, sys.stdin.readline().strip().split());
first = list(sys.stdin.readline().strip());
second = list(sys.stdin.readline().strip());
T = int(sys.stdin.readline());

first.reverse()
total = first + second

for j in range(T):
  for i in range(len(total) - 1):
    if total[i] in first and total[i+1] in second:
      total[i], total[i+1] = total[i+1], total[i]

      if total[i+1] == first[-1]:
        break

print(''.join(total))