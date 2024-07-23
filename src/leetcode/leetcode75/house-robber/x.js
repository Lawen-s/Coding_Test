/**
 * https://leetcode.com/problems/house-robber/description/?envType=study-plan-v2&envId=leetcode-75
 * 24-07-23 - O
 * 24-07-22 - O
 * 24-07-21 - X
 * 24-07-20 - X
 * 23-12-27 - X
 */

/**
 * 24-07-23 - O
 */
var rob = function(nums) {
  let robO = 0;
  let robX = 0;
  for(let i=0;i<nums.length;i++){
      let newRobO = nums[i]+robX;
      let newRobX = Math.max(robX,robO);
      robO = newRobO;
      robX = newRobX
  }
  return Math.max(robO,robX);
};

/**
 * 24-07-22 - O
 */
var rob = function(nums) {
  let robO = 0;
  let robX = 0;
  for(let i=0;i<nums.length;i++){
      let nextRobO = nums[i]+robX;
      let nextRobX = Math.max(robO,robX);
      robO=nextRobO;
      robX=nextRobX;
  }
  return Math.max(robO,robX);
};

/**
 * 24-07-21 - X
 */
var rob = function(nums) {
  let robO = 0;
  let robX = 0;
  for(let i=0;i<nums.length;i++){
      let newRobO = robX+nums[i];
      let newRobX = Math.max(robO,robX);
      robO = newRobO;
      robX = newRobX;
  }
  return Math.max(robO,robX);
};

/**
 * 24-07-20 - X
 * @param {*} nums 
 * @returns 
 */
var rob = function(nums ){
let rob = 0;
    let norob = 0;
    for (let i = 0; i < nums.length; i++) {
        let newRob = norob + nums[i];
        let newNoRob = Math.max(norob, rob);
        rob = newRob;
        norob = newNoRob;
    }
    return Math.max(rob, norob);
  }

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