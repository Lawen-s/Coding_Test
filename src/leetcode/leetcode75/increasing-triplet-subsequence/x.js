/**
 * https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75
 * 24-09-24 - X
 * 24-09-23 - X
 * 24-09-10 - X
 * 24-02-14 - X
 */

/**
 * 24-09-24 - X
 */
var increasingTriplet = function (nums) {
  let f = Infinity;
  let s = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (cur > s && cur > f) {
      return true;
    }
    if (cur > f) {
      s = cur;
    }
    if (s > cur) {
      f = cur;
    }
  }
  return false;
};

/**
 * 24-09-23 - X
 */
var increasingTriplet = function (nums) {
  let firstNumber = Infinity;
  let secondNumber = Infinity;
  for (let currentNumber of nums) {
    if (currentNumber > secondNumber && currentNumber > firstNumber) {
      return true;
    }
    if (currentNumber > firstNumber) {
      console.log({ firstNumber });
      secondNumber = currentNumber;
    } else {
      firstNumber = currentNumber;
    }
  }
  return false;
};

/**
 * 24-09-10 - X
 */
var increasingTriplet = function (nums) {
  let firstNumber = Infinity;
  let secondNumber = Infinity;

  for (let currentNumber of nums) {
    if (currentNumber > secondNumber && currentNumber > firstNumber) {
      return true;
    }
    if (currentNumber > firstNumber) {
      secondNumber = currentNumber;
    } else {
      firstNumber = currentNumber;
    }
  }
  return false;
};

/**
 * 2024-02-14
 * 통과 X (66/83) - 최대값으로 값들을 비교하는 방식
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let before = nums[0],
    middle = nums[1],
    next = nums[2];
  for (let i = 2; i < nums.length; i++) {
    if (before < middle && middle < next) {
      return true;
    } else {
      before = middle;
      middle = next;
      next = nums[i + 1];
    }
  }
  return false;
};

/**
 * 2024-02-14
 *  풀이 참고(통과코드)
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let firstNumber = Infinity;
  let secondNumber = Infinity;
  console.log(firstNumber);

  for (let currentNumber of nums) {
    if (currentNumber > secondNumber && currentNumber > firstNumber) {
      return true;
    }
    if (currentNumber > firstNumber) {
      secondNumber = currentNumber;
    } else {
      firstNumber = currentNumber;
    }
  }
  return false;
};

// 내 코드
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let check = 2;
  let numsHalf = nums.length / 2;
  let smallNum = nums[0];
  let mideumNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallNum && numsHalf >= i) {
      smallNum = nums[i];
      mideumNum = nums[i];
      check = 2;
    } else {
      if (smallNum < nums[i]) {
        if (mideumNum < nums[i]) {
          mideumNum = nums[i];
          check -= 1;
        } else {
          mideumNum = nums[i];
        }
      }
    }
    if (check === 0) {
      return true;
    }
  }
  return false;
};

/**
 * 통과 코드 1
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let min = Math.max(...nums);
  let mid = min;
  for (let num of nums) {
    if (num <= min) min = num;
    else if (num <= mid) mid = num;
    else return true;
  }
  return false;
};

/**
 * 통과 코드 2
 * 양의 무한대 Infinity를 사용하는 코드도 있다.
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let min = nums[0];
  let middleNumUpdatedAfterMin = Infinity;

  for (const num of nums) {
    if (num <= min) min = num;
    else if (num <= middleNumUpdatedAfterMin) middleNumUpdatedAfterMin = num;
    else return true; // We found out third number, the largest
  }

  return false;
};

// console.log(increasingTriplet([9,10,5,11,10,9,8]))
// console.log(increasingTriplet([1,5,0,4,1,3]))
// console.log(increasingTriplet([1,2,3,4,5]))
// console.log(increasingTriplet([5,4,3,2,1]))
// console.log(increasingTriplet([2,1,5,0,4,6]))
// console.log(increasingTriplet([1,0,2,-1,3]))
// console.log(increasingTriplet([20,100,10,12,5,13]))
// console.log(increasingTriplet([2,4,-2,-3]))
// console.log(increasingTriplet([0,4,2,1,0,-1,-3]))
// console.log(increasingTriplet([1,2,1,3]))
