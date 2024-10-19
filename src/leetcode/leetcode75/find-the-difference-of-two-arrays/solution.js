/**
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/submissions/1103529299/?envType=study-plan-v2&envId=leetcode-75
 * 24-10-20 - O
 * 24-10-17 - X
 * 24-03-10 - O
 * 23-11-22 - O
 */

/**
 * 24-10-20 - O
 */
var findDifference = function (nums1, nums2) {
  let nums1Arr = [...new Set(nums1)];
  let nums2Arr = [...new Set(nums2)];
  let newNums1 = [];
  let newNums2 = [];
  let max = Math.max(nums1Arr.length, nums2Arr.length);
  for (let i = 0; i < max; i++) {
    if (nums1Arr[i] !== undefined) {
      if (!nums2Arr.includes(nums1Arr[i])) {
        newNums1.push(nums1Arr[i]);
      }
    }
    if (nums2Arr[i] !== undefined) {
      if (!nums1Arr.includes(nums2Arr[i])) {
        newNums2.push(nums2Arr[i]);
      }
    }
  }
  return [newNums1, newNums2];
};

/**
 * 24-10-17 - X
 */
var findDifference = function (nums1, nums2) {
  let nums1Set = [...new Set(nums1)];
  let nums2Set = [...new Set(nums2)];
  let max = Math.max(nums1Set.length, nums2Set.length);
  let nums1Arr = [];
  let nums2Arr = [];
  for (let i = 0; i < max; i++) {
    if (!nums1Set.includes(nums2Set[i]) && nums2Set[i] !== undefined) {
      nums2Arr.push(nums2Set[i]);
    }
    if (!nums2Set.includes(nums1Set[i]) && nums1Set[i] !== undefined) {
      nums1Arr.push(nums1Set[i]);
    }
  }
  return [nums1Arr, nums2Arr];
};

/**
 * 24-03-10 - O - 내가 푼 코드(효율 X)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let arr1 = [];
  let arr2 = [];
  let length = nums1.length > nums2.length ? nums1.length : nums2.length;
  for (let i = 0; i < length; i++) {
    if (!nums2.includes(nums1[i]) && nums1[i] !== undefined) {
      if (!arr1.includes(nums1[i])) arr1.push(nums1[i]);
    }
    if (!nums1.includes(nums2[i]) && nums2[i] !== undefined) {
      if (!arr2.includes(nums2[i])) arr2.push(nums2[i]);
    }
  }
  return [arr1, arr2];
};

/**
 * 23-11-22
 * 내가 푼 코드(효율 안좋음) - 우선 푸는 목적으로
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  nums1 = nums1.filter((v, i) => nums1.indexOf(v) === i);
  nums2 = nums2.filter((v, i) => nums2.indexOf(v) === i);
  let newArr = [[], []];

  for (var i = 0; i < nums1.length; i++) {
    for (var j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        break;
      } else {
        if (j === nums2.length - 1) {
          newArr[0].push(nums1[i]);
        }
      }
    }
  }
  for (var i = 0; i < nums2.length; i++) {
    for (var j = 0; j < nums1.length; j++) {
      if (nums2[i] === nums1[j]) {
        break;
      } else {
        if (j === nums1.length - 1) {
          newArr[1].push(nums2[i]);
        }
      }
    }
  }
  return newArr;
};

/**
 * 다른 사람이 푼 코드 (효율 좋음)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);

  for (let item of nums1) {
    if (nums2.has(item)) {
      nums1.delete(item);
      nums2.delete(item);
    }
  }
  return [[...nums1], [...nums2]];
};
console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
