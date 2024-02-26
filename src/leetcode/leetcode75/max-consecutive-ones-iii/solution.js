/**
 * https://leetcode.com/problems/max-consecutive-ones-iii/submissions/1102751929/?envType=study-plan-v2&envId=leetcode-75
 * 24-02-27 - X
 * 23-11-20 - O
 */

/**
 * 24-02-27
 * 내가 푼 코드 - 통과 X
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let max = 0;
    let count = 0;
    let reduceNum = k;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]===0){
          count++
          reduceNum--;
        }else{
          count++;
        }
        if(reduceNum===0&&nums[i+1]===0||i===nums.length-1){
          console.log(i)
          max = Math.max(max,count)
          reduceNum = k;
          count =0;
        }
    }
    return max
};
/**
 * 풀이 참고, Sliding window
 * @param {*} A 
 * @param {*} K 
 * @returns 
 */
var longestOnes = function(A, K) {
  let left = 0, right = 0;
  
  while(right < A.length) {
      if(A[right] === 0) K--;
      if(K < 0) {
          if(A[left] === 0) K++;
          left++;
      }
      right++;
  }
  return right-left;
};

/**
 *
 * 내가 푼 코드(효율 x)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let count = k,
    result = 0,
    max = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] === 0) {
        if (count === 0) {
          break;
        }
        count--;
        result++;
      } else {
        result++;
      }
    }
    max = Math.max(max, result);
    count = k;
    result = 0;
  }
  return max;
};

/**
 * 풀이 참고 코드 (효율 좋음)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  for (right = 0; right < nums.length; right++) {
    k -= 1 - nums[right];
    if (k < 0) {
      k += 1 - nums[left];
      left += 1;
    }
  }
  return right - left;
};

// console.log(longestOnes(nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2))
// console.log(longestOnes(nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3))
