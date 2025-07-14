import sys
import heapq

def solution(scoville, K):
    heapq.heapify(scoville)  # 최소 힙으로 변환
    mix_count = 0  # 섞은 횟수
    
    while len(scoville) > 1:
        # 가장 작은 두 개의 음식 꺼내기
        first = heapq.heappop(scoville)
        
        # 모든 음식이 K 이상이면 종료
        if first >= K:
            return mix_count

        second = heapq.heappop(scoville)
        new_scoville = first + (second * 2)  # 새로운 음식 생성
        heapq.heappush(scoville, new_scoville)  # 힙에 추가
        mix_count += 1  # 횟수 증가

    # 마지막 남은 원소가 K 이상인지 확인
    return mix_count if scoville[0] >= K else -1

print(solution([1, 2, 3, 9, 10, 12], 7))