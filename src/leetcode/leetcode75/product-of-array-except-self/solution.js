/**
 * https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=leetcode-75
 * 24-11-04 - O
 * 24-09-24 - O
 * 24-09-23 - X
 * 24-09-05 - O
 * 24-02-05 - X
 * 23-11-14 - O
 */

/**
 * 24-11-04 - O
 */
var productExceptSelf = function (nums) {
  let max = nums.reduce((acc, cur) => acc * cur, 1);
  if (max === 0) {
    return nums.map((v, i) =>
      nums.reduce((acc, cur, idx) => (idx !== i ? acc * cur : acc), 1)
    );
  } else {
    return nums.map((v) => {
      return Math.floor(max / v);
    });
  }
};

/**
 * 24-09-24 - O
 */
var productExceptSelf = function (nums) {
  let max = nums.reduce((acc, cur) => (acc *= cur), 1);
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      newArr[i] = nums.reduce((acc, cur, idx) => {
        if (idx !== i) {
          return (acc *= cur);
        } else {
          return acc;
        }
      }, 1);
    } else {
      newArr[i] = Math.floor(max / nums[i]);
    }
  }
  return newArr;
};

/**
 * 24-09-23 - X
 */
var productExceptSelf = function (nums) {
  let arr = [];
  let max = nums.reduce((acc, cur) => (acc *= cur), 1);
  for (let i = 0; i < nums.length; i++) {
    let sum;
    if (nums[i] === 0) {
      sum = nums.reduce((acc, cur, index) => (acc *= index !== i ? cur : 1), 1);
    } else {
      sum = Math.floor(max / nums[i]);
    }
    arr.push(sum);
  }
  return arr;
};

/**
 * 24-09-05 - O
 */
var productExceptSelf = function (nums) {
  let arr = [];
  let max = nums.reduce((acc, cur) => (acc *= cur), 1);
  for (let i = 0; i < nums.length; i++) {
    let sum;
    if (nums[i] === 0) {
      sum = nums.reduce((acc, cur, index) => (acc *= index !== i ? cur : 1), 1);
    } else {
      sum = Math.floor(max / nums[i]);
    }
    arr.push(sum);
  }
  return arr;
};

/**
 * 24.02.05
 * 타임오버로 통과 X
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (i !== j) result[j] *= nums[i];
      if (result[j] === -0) result[j] = 0;
    }
  }
  return result;
};

/**
 * 보고 이해한 코드, 그러나 이전에 내가 푼 방식이 더 이해가 간다.(해당 코드는 효율이 좋음)
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // Set up an empty array as our result
  const result = [];

  // Initialize a prefix tracker at 1
  let prefix = 1;

  // Loop through the input array - for each position,
  // the result array should equal the prefix tracker.

  // Then, update the prefix tracker to be the product of itself,
  // multiplied by the input value at the position.
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // Initialize a suffix tracker at 1
  let suffix = 1;

  // Loop backwards through the array.
  // For each iteration, set the result array to be
  // the product of itself multiplied by the suffix tracker.

  // Then, update the suffix tracker to be the product of itself,
  // multiplied by the input value at that position.
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
};

// console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

/**
 * 내 코드
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let newArray = [];
  for (var i = 0; i < nums.length; i++) {
    let newNum = nums[i] === 0 ? 1 : 1;
    for (var j = 0; j < nums.length; j++) {
      if (i !== j) {
        console.log(nums[j]);
        newNum *= nums[j];
      }
    }
    console.log(newNum);
    newArray.push(newNum);
  }
  return newArray;
};

/**
 * 참고 코드(효율이 좋음)
 * @param {number[]} nums
 * @return {number[]}
 */
// const productExceptSelf = (nums) => {
//   const res = [];

//   let productPlaceholder = 1;
//   for ( let i = 0; i < nums.length; i++ ) {
//       res[i] = productPlaceholder;
//       productPlaceholder *= nums[i];
//     }

//     productPlaceholder = 1;
//     for ( let j = nums.length - 1; j >= 0; j-- ) {
//       res[j] *= productPlaceholder;
//       productPlaceholder *= nums[j];
//   }

//   return res;
// };
