// 유튜브 풀이보고 이해하고 풀어봄
class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    // 1. 오른쪽과 왼쪽 끝을 기준으로 합니다.
    // 2. 둘 값을 비교하여 더 작은 값이 왼쪽인 경우 +1, 오른쪽이 작은값인 경우 -1
    // 3. 이동하면서 높이가 높은지, 낮은지 확인합니다.
    // 4. 높다면 기준으로 잡았던 값을 해당 높이로 변경합니다.
    // 5. 낮다면 높은 기준과 낮은 값을 빼줍니다.
    // 6. 중간지점까지 해당작업을 반복합니다.
    let s = 0;
    let e = height.length - 1;
    let leftMax = height[s];
    let rightMax = height[e];
    let count = 0;
    while (s < e) {
      if (leftMax < height[s]) {
        leftMax = height[s];
      } else {
        count += leftMax - height[s];
      }
      if (rightMax < height[e]) {
        rightMax = height[e];
      } else {
        count += rightMax - height[e];
      }
      if (leftMax <= rightMax) {
        s++;
      } else {
        e--;
      }
    }
    return count;
  }
}
