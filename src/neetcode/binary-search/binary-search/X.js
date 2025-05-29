// while 문 중앙값에서 헤맴
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let s = 0;
    let e = nums.length - 1;
    let mid = Math.floor((s + e) / 2);
    while (s <= e) {
      mid = s + Math.floor((e - s) / 2);
      if (nums[mid] === target) {
        return mid;
      }
      if (nums[mid] > target) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    }
    return -1;
  }
}
