/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/submissions/1121174254/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 문제를 제대로 이해하지 못하였지만, Sort를 사용하지 않고 푸는 방식이라고 생각했음
* @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let count = 0;
  nums.forEach((x)=>{if(x>=k){
      count++;
  }})
  return count
};


/**
 * 풀이 옮겨옴(퀵 소트)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(arr, start, end, k) {
  const pivotIndex = partition(arr, start, end);
  /**
   * Use pivotIndex as the seperater. If k is smaller than the length of the 
   * right side of the array, the target is in the right side of the array. 
   * If k is larger, the target is in the left side of the array. 
   */
  if (k < arr.length - pivotIndex) {
      return quickSelect(arr, pivotIndex + 1, end, k);
  } else if (k > arr.length - pivotIndex) {
      return quickSelect(arr, start, pivotIndex - 1, k);
  }
  // pivotIndex is the index of the target if k equals to the length of the 
  // right side of the array.
  return arr[pivotIndex];
};

function partition(arr, start, end) {
  /**
   * Use the last element as pivot for simplicity. Randomized pivot 
   * is a better way to avoid worst case where the the largest or the smallest 
   * element is always selected.
   */
  const pivot = arr[end];
  let i = start;
  let j = end - 1;
  // move all numbers smaller than pivot to the left and larger to the right
  while(i <= j) {    
      while (arr[i] < pivot) {
          i += 1;
      } 
      while (arr[j] > pivot) {
          j -= 1;
      }
      if(i <= j) {
          swap(arr, i, j);
          i += 1;
          j -= 1;
      }   
  }
  // Swap pivot value to the position so that all numbers larger than pivot value 
  // is on the right, and smaller on the left.
  swap(arr, i, end);
  // return the final index where the pivot value is.
  return i;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}