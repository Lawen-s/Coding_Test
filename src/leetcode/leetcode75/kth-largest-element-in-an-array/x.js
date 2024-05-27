/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/submissions/1121174254/?envType=study-plan-v2&envId=leetcode-75
 * 24-05-27 - X
 * 23-12-17 - X
 */

/**
 * 24-05-27 - X - 정렬을 구현하는 문제
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MinHeap {
  constructor() {
      this.heap = [];
  }
  push(val) {
      this.heap.push(val);
      this.bubbleUp();
  }
  pop() {
      const max = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0) {
          this.heap[0] = end;
          this.bubbleDown();
      }
      return max;
  }
  peek() {
      return this.heap[0];
  }
  bubbleUp() {
      let idx = this.heap.length - 1;
      const element = this.heap[idx];
      while (idx > 0) {
          let parentIdx = Math.floor((idx - 1) / 2);
          let parent = this.heap[parentIdx];
          if (element >= parent) break;
          this.heap[parentIdx] = element;
          this.heap[idx] = parent;
          idx = parentIdx;
      }
  }
  bubbleDown() {
      let idx = 0;
      const length = this.heap.length;
      const element = this.heap[0];
      while (true) {
          let leftChildIdx = 2 * idx + 1;
          let rightChildIdx = 2 * idx + 2;
          let leftChild, rightChild;
          let swap = null;
          if (leftChildIdx < length) {
              leftChild = this.heap[leftChildIdx];
              if (leftChild < element) {
                  swap = leftChildIdx;
              }
          }
          if (rightChildIdx < length) {
              rightChild = this.heap[rightChildIdx];
              if (
                  (swap === null && rightChild < element) || 
                  (swap !== null && rightChild < leftChild)
              ) {
                  swap = rightChildIdx;
              }
          }
          if (swap === null) break;
          this.heap[idx] = this.heap[swap];
          this.heap[swap] = element;
          idx = swap;
      }
  }
}
var findKthLargest = function(nums, k) {
  let heap = new MinHeap();
  for (let i = 0; i < k; i++) {
      heap.push(nums[i]);
  }
  for (let i = k; i < nums.length; i++) {
      if (nums[i] > heap.peek()) {
          heap.pop();
          heap.push(nums[i]);
      }
  }
  return heap.peek();
};

/**
 * 23-12-17 - X
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