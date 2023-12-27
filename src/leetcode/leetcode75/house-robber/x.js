/**
 * https://leetcode.com/problems/house-robber/description/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 풀이를 보고 이해
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums === null || nums.length === 0) {
      return 0;
  }
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
      dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
  }
  return dp[nums.length - 1];
};


/**
 * 효율 좋은 코드
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length === 1) return nums[0];
  if(nums.length === 2) return Math.max(...nums);
  const dp = [];
  dp[0] = nums[0];
  dp[1] = nums[1];

  for(let i = 2; i < nums.length; i++){
    const test = (dp[i - 3] === undefined) ? -Infinity : dp[i - 3] + nums[i];
    const max = Math.max(nums[i] + dp[i - 2], dp[i - 1], test);
    dp[i] = max;
  }

  return dp.at(-1);
}