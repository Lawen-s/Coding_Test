/**
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/submissions/1103529299/?envType=study-plan-v2&envId=leetcode-75
 * 24-03-10 - O
 * 23-11-22 - O 
*/

/**
 * 24-03-10 - O - 내가 푼 코드(효율 X)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  let arr1 = [];
  let arr2 = [];
  let length = nums1.length>nums2.length?nums1.length:nums2.length;
  for(let i = 0; i < length; i++) {
    if(!nums2.includes(nums1[i])&&nums1[i]!==undefined){
      if(!arr1.includes(nums1[i])) arr1.push(nums1[i])
    }
    if(!nums1.includes(nums2[i])&&nums2[i]!==undefined){
      if(!arr2.includes(nums2[i])) arr2.push(nums2[i])
    }
  }
  return [arr1,arr2]
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
