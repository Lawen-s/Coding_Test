class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    // 1. 반복문을 이용
    // 2. 끝까지 반복을 하고 낮은 값이 있는 경우 count
    // 3. count를 배열에 넣는다.
    let tLen = temperatures.length;
    let result = [];
    for (let i = 0; i < tLen; i++) {
      let count = 0;
      for (let j = i + 1; j < tLen; j++) {
        if (temperatures[i] >= temperatures[j]) {
          count++;
        } else {
          count++;
          break;
        }
        if (j === tLen - 1) {
          count = 0;
        }
      }
      result.push(count);
    }
    return result;
  }
}
