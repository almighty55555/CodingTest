import sys;

N = int(sys.stdin.readline().strip());
coords = list(map(int, sys.stdin.readline().strip().split()));

sorted_coords = sorted(set(coords));

rank = {val: idx for idx, val in enumerate(sorted_coords)};

compressed_coords = [str(rank[x]) for x in coords]
print(' '.join(compressed_coords));