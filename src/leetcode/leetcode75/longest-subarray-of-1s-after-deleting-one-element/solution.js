/**
 * https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/submissions/1103493649/?envType=study-plan-v2&envId=leetcode-75
 */

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
