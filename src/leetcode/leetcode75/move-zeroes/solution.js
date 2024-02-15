/**
 * https://leetcode.com/problems/move-zeroes/submissions/1099354251/?envType=study-plan-v2&envId=leetcode-75
 *  2023-11-15 - O
 *  2024-02-15 - O
 */
/**
 * 2024-02-15
 * 효율 안좋음
 */
var moveZeroes = function(nums) {
    for(let i =0;i<nums.length;i++){
        for(let j =i+1;j<nums.length;j++){
            if(nums[i]===0){
                let char = nums[j];
                nums[j]=nums[i];
                nums[i] = char
            }
        }
    }
    return nums
};
/**
 * 효율 좋음
 */
var moveZeroes = function(nums) {
    let lastNonZero = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const temp = nums[lastNonZero]
            nums[lastNonZero] = nums[i]
            nums[i] = temp
            lastNonZero++
        }
    }
};



/**
 * 내가 푼 방법(효율이 낮음)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for(let i =0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++){
        if(nums[i]===0){
        let copyNum = nums[j]
        nums[j]=nums[i]
        nums[i]=copyNum
        }
      }
  }
  return nums
}

/**
 * 다른 사람이 푼 방법(효율 좋음)
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
var moveZeroes = function(nums) {
nums.sort((a,b) => {
    if (a === 0) {
        return 1;
    } else if (b === 0) {
        return -1;
    } else {
        return 0
    }
})
};


/**
 * 효율 제일 좋음
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let nonZeroIndex = 0
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          nums[nonZeroIndex] = nums[i]
          nonZeroIndex++
      }
  }
  
  for (let i = nonZeroIndex; i < nums.length; i++) {
      nums[i] = 0
  }
};


console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0]))