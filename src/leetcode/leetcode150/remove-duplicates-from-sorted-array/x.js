/**
 * 문제: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * 풀이를 보고 이해
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] != nums[i]) 
          nums[++i] = nums[j];
  }
  return ++i;
};



console.log(removeDuplicates([1,1,2])) // result = 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // result = 5

/**
 * 효율 좋은 코드
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const set = [... new Set(nums)];
  nums.length = 0;
  const pushed = nums.push(...set);
  return pushed
};