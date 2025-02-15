class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    // 1. 세로 확인(자기 자신)
    // 2. 가로 확인
    // 3. 가로에서 우측으로 진행이 될때 최솟값이 세로
    // 4. max 값을 구해야한다.
    let arr = [];
    for (let i = 0; i < heights.length; i++) {
      let max = heights[i];
      let min = heights[i];
      let count = 1;
      for (let j = i + 1; j < heights.length; j++) {
        count++;
        // 최솟값으로 넓이를 구해야될 수 도 있음
        if (min > heights[j]) {
          min = heights[j];
          // max가 있지만 최솟값 * count(가로)가 더 클수 있음
          if (max < min * count) {
            max = min * count;
          }
        }
        // [2, 1, 5, 6, 2, 3] 배열에서 5,6인 경우를 생각하면 10이나와야하는데 넘어가는 경우가 존재함
        // 조건 추가 최솟값*count(가로)인 경우도 필요
        if (heights[i] < heights[j] && max < min * count) {
          max = min * count;
        }
      }
      arr.push(max > min * count ? max : min * count);
    }
    return Math.max(...arr);
  }
}
