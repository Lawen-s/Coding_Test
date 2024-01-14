/**
 * 문제:https://leetcode.com/problems/merge-sorted-array/submissions/1145834824/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * 풀이 보고 이해
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
}
  nums1.sort((a, b) => a - b);
}


// 내가 푼 방식1(테스트 코드에서는 통과가 안됐지만 실제로는 가능) 
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m)
  nums2.splice(n)
  return nums1.concat(nums2).sort()
}

// 내가 푼 방식2(테스트 코드에서는 통과가 안됐지만 실제로는 가능)
var merge = function(nums1, m, nums2, n) {
    function splitArr(num, arr){
    let result = []
    for (let i = 0; i<num;i++){
        result.push(arr[i])
    }
    return result
}
return splitArr(m,nums1).concat(splitArr(n,nums2)).sort()
}

/**
 * 효율 좋은 코드
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let last = (m + n) - 1;
  m -= 1;
  n -= 1;
  while (n >= 0) {
     if (nums1[m] > nums2[n]) {
         nums1[last] = nums1[m];
         m -= 1;
     } else {
         nums1[last] = nums2[n];
         n -= 1;
     } 
     last -= 1;
  }
 };

console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3))
// console.log(merge(nums1 = [0], m = 0, nums2 = [1], n = 1))