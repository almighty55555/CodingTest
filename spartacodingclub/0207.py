import sys;

while True:
  line = sys.stdin.readline().rstrip()
  if line == '.':
    break
  
  stack = [];
  bracket_pairs = {')': '(', ']': '['}
  balanced = True

  for char in line:
    if char in "([":
      stack.append(char)
    elif char in ")]":
      if not stack or stack[-1] != bracket_pairs[char]:
        balanced = False
        break
      stack.pop()

  if stack:
    balanced = False

  if balanced:
    print("yes")
  else:
    print("no")