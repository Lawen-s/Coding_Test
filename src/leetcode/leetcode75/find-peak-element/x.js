/**
 * https://leetcode.com/problems/find-peak-element/submissions/1123435596/?envType=study-plan-v2&envId=leetcode-75
 * 24-07-16 - X
 * 24-07-14 - O
 * 24-07-06 - O
 * 23-12-19 - X
 */

/**
 * 24-07-16 - X
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length-1;
    let max = 0;
    while(left<right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]<nums[mid+1]){
            left=mid+1;
        }else if(nums[mid]>nums[mid+1]){
            right=mid;
        }
    }
    return left
};

/**
 * 24-07-14 - O
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let max = 0;
   let index = 0;
   if(nums.length<=1){
       return index;
   }
   if(nums.length<=2){
       let p = nums[0];
       let n = nums[1];
       
       return p>n?0:1;
   }
   
   
   for(let i =1; i<nums.length;i++){
       let before =nums[i-1];
       let present = nums[i];
       let next =nums[i+1];
       if(before<present&&next<present&&max<present){
           max= present;
           index=i;
       }
       if(before<next&&present<next&&max<next){
           max = next
           index=i+1
       }
       if(before>present&&before>next&&max<before){
           max=before;
           index=i-1;
       }
   }
   return index
};

/**
 * 24-07-06 - O
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if(nums.length<=2){
      return nums[nums.length-1]>nums[0]?nums.length-1:0;
  }
  let max = 0;
  for(let i=0;i<nums.length;i++){
      if(nums[i]<nums[i+1]&&nums[i+1]>nums[i+2]){
          max = max<i+1?i+1:max;
      }
      if(nums[i]<nums[i+2]&&nums[i+1]<nums[i+2]){
          max = i+2;
      }
  }
  return max
};

/**
 * 풀이 참고 - 23-12-19 - X
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