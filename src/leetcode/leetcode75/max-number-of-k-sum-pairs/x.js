/**
 * https://leetcode.com/problems/max-number-of-k-sum-pairs/submissions/1101968121/?envType=study-plan-v2&envId=leetcode-75
 * 24-10-06 - O
 * 24-10-04 - X
 * 24-02-20 - X
 * 23-11-19 - X
 */

/**
 * 24-10-06 - O
 */
var maxOperations = function (nums, k) {
  let start = 0;
  let end = nums.length - 1;
  let count = 0;
  nums.sort((a, b) => a - b);
  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum > k) {
      end--;
    } else {
      start++;
      if (sum === k) {
        count++;
        end--;
      }
    }
  }
  return count;
};

/**
 * 24-10-04 - X
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let s = 0;
  let count = 0;
  let e = nums.length - 1;
  while (s < e) {
    if (nums[s] + nums[e] === k) {
      count++;
      s++;
      e--;
    } else {
      nums[s] + nums[e] > k ? e-- : s++;
    }
  }
  return count;
};

/**
 * 24-02-20 - X -  풀이 보고 이해
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let result = 0,
    i = 0,
    j = nums.length - 1;
  nums.sort((x, y) => x - y);
  while (i < j) {
    let add = nums[i] + nums[j];
    if (add < k) i++;
    else if (add > k) j--;
    else result++, i++, j--;
  }
  return result;
};

/**
 * 내가 푼 코드(특정 부분에서 통과 x)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  for (let left = 0; left < nums.length; left++) {
    for (let right = nums.length; right > left; right--) {
      if (nums[left] + nums[right] === k) {
        nums.splice(right, 1);
        nums.splice(left, 1);
        result += 1;
      }
    }
  }
};

/**
 * 참고한 코드
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let result = 0,
    left = 0,
    right = nums.length - 1;
  nums.sort((a, b) => a - b);

  while (left < right) {
    if (nums[left] + nums[right] > k) {
      right--;
    } else if (nums[left] + nums[right] < k) {
      left++;
    } else {
      result++;
      left++;
      right--;
    }
  }
  return result;
};

// console.log(maxOperations([1,2,3,4], 5))
// console.log(maxOperations([3,1,3,4,3], 6))
// console.log(maxOperations([4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], 2))
// console.log(maxOperations([63,10,28,31,90,53,75,77,72,47,45,6,49,13,77,61,68,43,33,1,14,62,
//   55,55,38,54,8,79,89,14,50,68,85,12,42,57,4,67,75,6,71,8,61,26,11,20,22,3,70,52,82,70,67,18,66,79,
//   84,51,78,23,19,84,46,61,63,73,80,61,15,12,58,3,21,66,42,55,7,58,85,60,23,69,41,61,35,64,58,84,61,77,
//   45,14,1,38,4,8,42,16,79,60,80,39,67,10,24,15,6,37,68,76,30,53,63,87,11,71,86,82,77,76,37,21,85,7,75,83,80,8,19,25,11,
//   10,41,66,70,14,23,74,33,76,35,89,68,85,83,57,6,72,34,21,57,72,79,29,65,3,67,8,24,24,18,26,27,68,78,64,57,55,68,28,9,11,
//   38,45,61,37,81,89,38,43,45,26,84,62,22,37,51,15,30,67,75,24,66,40,81,74,48,43,78,14,33,19,73,5,1,2,53,29,49,73,23,5], 59))
