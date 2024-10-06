/**
 * https://leetcode.com/problems/maximum-average-subarray-i/solutions/2644131/js-with-explanation-easy-to-understand/?envType=study-plan-v2&envId=leetcode-75
 * 2024-10-06 - X
 * 2024-02-21 - X
 */

/**
 * 2024-10-06 - X
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    max = Math.max(max, sum);
  }

  return max / k;
};
/**
 * 2024-02-21 - 풀이를 보고 이해
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let left = 0;
  let largestTotal = 0;
  let currentTotal = 0;

  // 처음 k 길이의 부분 배열의 합 구하기
  for (let i = 0; i < k; i++) {
    currentTotal += nums[i];
  }

  // 현재 가장 큰 총합이 처음 구한 총합이다.
  largestTotal = currentTotal;

  // k번째 요소부터 하나씩 늘려가면서 총합을 구한다.
  for (let right = k; right < nums.length; right++) {
    currentTotal -= nums[left++];
    currentTotal += nums[right];
    // 만약 현재 총합이 최대 총합보다 크면 갱신
    largestTotal = currentTotal > largestTotal ? currentTotal : largestTotal;
  }

  // 평균 리턴
  return largestTotal / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// console.log(findMaxAverage([5], 1))
