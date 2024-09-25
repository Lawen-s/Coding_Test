/**
 * https://leetcode.com/problems/move-zeroes/submissions/1099354251/?envType=study-plan-v2&envId=leetcode-75
 *  2024-09-25 - O
 *  2024-09-24 - O
 *  2024-02-15 - O
 *  2023-11-15 - O
 */

/**
 *  2024-09-25 - O
 */
var moveZeroes = function (nums) {
  let s = 0;
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[n], nums[s]] = [nums[s], nums[n]];
      s++;
    }
    n++;
  }
  return nums;
};

/**
 *  2024-09-24 - O
 */
var moveZeroes = function (nums) {
  let l = nums.length;
  let s = 0;
  while (s < l) {
    if (nums[s] === 0) {
      for (let i = 0; i < l; i++) {
        if (i + 1 === l) {
          break;
        }
        let cur = nums[i];
        let next = nums[i + 1];
        if (nums[i] === 0) {
          nums[i] = next;
          nums[i + 1] = cur;
        }
      }
    }
    s++;
  }
  return nums;
};

/**
 * 2024-02-15
 * 효율 안좋음
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0) {
        let char = nums[j];
        nums[j] = nums[i];
        nums[i] = char;
      }
    }
  }
  return nums;
};
/**
 * 효율 좋음
 */
var moveZeroes = function (nums) {
  let lastNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[lastNonZero];
      nums[lastNonZero] = nums[i];
      nums[i] = temp;
      lastNonZero++;
    }
  }
};

/**
 * 내가 푼 방법(효율이 낮음)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0) {
        let copyNum = nums[j];
        nums[j] = nums[i];
        nums[i] = copyNum;
      }
    }
  }
  return nums;
};

/**
 * 다른 사람이 푼 방법(효율 좋음)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  nums.sort((a, b) => {
    if (a === 0) {
      return 1;
    } else if (b === 0) {
      return -1;
    } else {
      return 0;
    }
  });
};

/**
 * 효율 제일 좋음
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
