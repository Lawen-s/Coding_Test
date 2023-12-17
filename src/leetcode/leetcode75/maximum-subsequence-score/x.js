/**
 * https://leetcode.com/problems/maximum-subsequence-score/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 풀이보고 이해함
 * 해당 문제는 MinPriorityQueue를 사용하여 풀 수 있음
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
  const minHeap = new MinPriorityQueue()
  const zipped = nums1.map((num1, i) => [num1, nums2[i]]);
  zipped.sort((a, b) => b[1] - a[1])

  let result = 0, sum = 0;

  for(const [num, min] of zipped) {
      minHeap.enqueue(num);
      sum += num;

      if (minHeap.size() == k) {
          result = Math.max(result, sum * min);
          sum -= minHeap.dequeue().element
      }
  }

  return result;
};