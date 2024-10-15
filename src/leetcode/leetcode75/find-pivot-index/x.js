/**
 * https://leetcode.com/problems/find-pivot-index/submissions/1103506906/?envType=study-plan-v2&envId=leetcode-75
 * 24-10-16 - X
 * 24-03-04 - X
 * 23-11-21 - X
 */

/**
 * 24-10-16 - X
 */
var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((a, c) => a + c, 0);
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (leftSum === rightSum) {
      return i;
    } else {
      leftSum += nums[i];
    }
  }
  return -1;
};

/**
 * 24-03-04 - X - 풀이 참고
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((r, n) => r + n, 0);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    const right = sum - left - nums[i];
    if (left === right) {
      return i;
    }
    left += nums[i];
  }
  return -1;
};

/**
 * 23-11-21 - X
 * 블로그를 참고
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = 0;
  let leftSum = 0;
  nums.map((x) => (total += x));
  for (let i = 0; i < nums.length; i++) {
    total -= nums[i];
    if (total === leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

/**
 * 참고 블로그
 * https://velog.io/@jerry92/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-LeetCode-Find-Pivot-Index
 */

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
