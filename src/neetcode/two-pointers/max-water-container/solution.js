class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    // 1. 비교하려는 인덱스 2개를 구합니다.
    // 2. 2개의 인덱스에서 최솟값의 높이를 구합니다.(세로)
    // 3. 2개의 인덱스의 차를 구합니다.(가로)
    // 4. 가로 x 세로를 구합니다.(넓이)
    // 5. 넓이가 최댓값이진 max와 비교합니다.
    // 6. 1~4 작업을 반복합니다.
    // 7. 반복하면서 max값을 도출합니다.
    let e = heights.length - 1;
    let max = 0;
    for (let i = 0; i <= e; i++) {
      for (let j = i + 1; j <= e; j++) {
        let minHeights = heights[i] < heights[j] ? heights[i] : heights[j];
        let row = j - i;
        let area = row * minHeights;
        max = Math.max(max, area);
      }
    }
    return max;
  }
}
