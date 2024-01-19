/**
* 문제 - https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * 내가 푼 방식 (문제 답이 생각한 것과 다름)
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  return nums.reduce((acc, curr) => (curr !== val ? [...acc,curr] : acc), []);
};

/*
* https://doozi0316.tistory.com/entry/leetCode-27-Remove-Element-Easy-%ED%92%80%EC%9D%B4 (풀이 이해)
*/
var removeElement = function(nums, val) {
  var zeroStartIdx = 0;
  for(let i=0;i<nums.length;i++){
      if(nums[i]!==val){
          nums[zeroStartIdx]=nums[i];
          zeroStartIdx++
      }
  }
  return zeroStartIdx; 
};

console.log(removeElement( nums = [3,2,2,3], val = 3))