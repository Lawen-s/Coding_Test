/**
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/submissions/1103493649/?envType=study-plan-v2&envId=leetcode-75
 * 24-10-10 - X
 * 24-02-28 - X
 * 23-11-21 - X
 */

/**
 * 24-10-10 - X
 */
var longestSubarray = function (nums) {
  let max = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      max = Math.max(max, left + right);
      left = right;
      right = 0;
    } else {
      right++;
    }
  }
  max = Math.max(max, left + right);
  return max === nums.length ? max - 1 : max;
};

/**
 * 내가 푼 코드
 * 24-02-28 - X
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0,
    right = nums.length,
    count = 0,
    remove = 1;
  while (left < right) {
    if (nums[left] === 1) {
      count++;
      left++;
    } else {
      left++;
      if (remove === 0) {
        remove = 1;
        count--;
      } else {
        remove--;
      }
    }
  }
  return count === right ? count - 1 : count;
};

/**
 * 풀이 봄
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let zeroCount = 0;
  let longestWindow = 0;
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    zeroCount += nums[i] === 0 ? 1 : 0;
    while (zeroCount > 1) {
      zeroCount -= nums[start] === 0 ? 1 : 0;
      start++;
    }
    longestWindow = Math.max(longestWindow, i - start);
  }
  return longestWindow;
};

/**
 * 유튜브 참고 https://www.youtube.com/watch?v=jhBrybXSFTs
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let prev = 0,
    now = 0,
    count = 1,
    max = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count--;
    } else {
      now++;
    }
    if (count === 0 || i === nums.length - 1) {
      max = max > now + prev ? max : now + prev;
      (prev = now), (now = 0), (count = 1);
    }
  }
  return max === nums.length ? max - 1 : max;
};

console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarray([1, 1, 1]));
