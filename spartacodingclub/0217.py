import sys;
N = int(sys.stdin.readline().strip());

extension_count = {};

for i in range(N):
  filename = input().strip()
  name, ext = filename.split('.')
  extension_count[ext] = extension_count.get(ext, 0) + 1

for ext in sorted(extension_count.keys()):
  print(ext, extension_count[ext])
