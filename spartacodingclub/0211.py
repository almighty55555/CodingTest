import heapq

def findRelativeRanks(score):
    n = len(score);
    heap = [];

    for i, s in enumerate(score):
        heapq.heappush(heap, (-s, i))

    result = [""] * n;
    rank = 1;

    while heap:
        _, idx = heapq.heappop(heap)
        if rank == 1:
            result[idx] = "Gold Medal"
        elif rank == 2:
            result[idx] = "Silver Medal"
        elif rank == 3:
            result[idx] = "Bronze Medal"
        else:
            result[idx] = str(rank)
        rank += 1

    return result

print(findRelativeRanks([1, 2, 3, 6, 5]))