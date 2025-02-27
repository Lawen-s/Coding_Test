class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    // 1. 문자를 하나씩 확인합니다.
    // 2. 문자가 이전에도 있었는지 확인합니다.
    // 3. 없었다면 count +1을 하고 있었다면 리셋을 합니다.
    // 4. 리셋을 하기전에서 max와 count 중 큰값을 max에 할당합니다.
    // 5. max와 카운트 숫자를 비교하여 max값을 결정합니다.
    let max = 0;
    for (let i = 0; i < s.length; i++) {
      let set = new Set(s[i]);
      let count = 1;
      for (let j = i + 1; j < s.length; j++) {
        if (set.has(s[j])) {
          max = Math.max(count, max);
          break;
        } else {
          count++;
          set.add(s[j]);
        }
      }
      max = Math.max(count, max);
    }
    return max;
  }
}
