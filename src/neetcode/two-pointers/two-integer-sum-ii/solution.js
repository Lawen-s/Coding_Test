class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    // 1. 시작과 끝 인덱스를 지정합니다.
    // 2. 반복문을 진행합니다.
    // 3. numbers[s]+numbers[e]가 target 보다 작은 경우 s를 +1합니다.
    // 4. numbers[s]+numbers[e]가 target 보다 큰 경우 e를 -1합니다.
    // 5. numbers[s]+numbers[e]가 target과 같다면 s,e를 result에 전달합니다.
    let s = 0;
    let e = numbers.length - 1;
    let result = [];
    while (s < e) {
      if (numbers[s] + numbers[e] === target) {
        return [s + 1, e + 1]; // 인덱스에 +1을 해야합니다.
      }
      if (numbers[s] + numbers[e] < target) {
        s++;
      } else {
        e--;
      }
    }
    return result;
  }
}
