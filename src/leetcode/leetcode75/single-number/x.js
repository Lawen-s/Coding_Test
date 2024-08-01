/**
 * 문제 : https://leetcode.com/problems/single-number/solutions/396584/clean-javascript-solution/?envType=study-plan-v2&envId=leetcode-75
 * 24-08-01 - O
 * 24-07-31 - X
 * 24-01-02 - X
 */

/**
 * 24-08-01 - O
 */
var singleNumber = function(nums) {
  let sortArr = nums.sort();
  for(let i=0;i<nums.length;i+=2){
      if(sortArr[i]!==sortArr[i+1]){
          return sortArr[i];
      }
  }
  return null
};

/** 
 * 24-07-31 - X
 */
var singleNumber = function(nums) {
  let arr = nums.sort();
  for(let i =0;i<nums.length;i+=2){
      if(arr[i]!==arr[i+1]){
          return arr[i];
      }
  }
  return arr[-1]
};

/**
 * 정답을 보고 이해 
 * 정렬 후 푸는 문제
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let arr = nums.sort((a, b) => a - b); // Create a copy of the array and sort it

  for (let i = 0; i <= nums.length - 1; i += 2) { // Iterate by 2
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }

  return arr[arr.length - 1];  // Return the first non-matching pair
};


/**
 * map을 이용하여 중복을 카운트하는 방식
 * @param {*} nums 
 * @returns 
 */
function singleNumber(nums) {
  const map = {};
  for (let n of nums) {
    if (map[n] == null) map[n] = 0;
    map[n]++;
  }

  for (let n in map) {
    if (map[n] === 1) return Number(n);
  }
}