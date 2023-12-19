/**
 * https://leetcode.com/problems/find-peak-element/submissions/1123435596/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 풀이 참고
 * 시간 복잡도 O(n)
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] > nums[i+1]) return i;
  }
  return nums.length-1;
};


/**
 * 풀이 참고
 * 시간 복잡도 O(logn)
 * @param {*} nums 
 * @returns 
 */
var findPeakElement = function(nums) {
  let left = 0, right = nums.length-1, mid;
  
  while(left < right) {
      mid = Math.floor((right+left)/2);
      if(nums[mid] > nums[mid+1]) right = mid;
      else left = mid+1;
  }
  return left;
};