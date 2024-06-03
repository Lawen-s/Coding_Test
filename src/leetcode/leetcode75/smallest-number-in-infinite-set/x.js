/**
 * https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3453137/simple-and-fast-solution-ts-js/?envType=study-plan-v2&envId=leetcode-75
 * 24-06-03 - X
 * 23-12-17 - X
 */


/**
 * 24-06-03 - X
 */
var SmallestInfiniteSet = function() {
  this.arr = Array(1001).fill(true);
};

/**
* @return {number}
*/
SmallestInfiniteSet.prototype.popSmallest = function() {
  for (let i = 1; i < this.arr.length; i++) {
    if (this.arr[i]) {
      this.arr[i] = false;
      return i;
    }
  }
  return null;
};

/** 
* @param {number} num
* @return {void}
*/
SmallestInfiniteSet.prototype.addBack = function(num) {
  this.arr[num] = true;
};


/**
 * 풀이를 보고 이해 (효율 좋은 코드)
 */
var SmallestInfiniteSet = function() {
  this.heap = [];
  this.min_num = 1;
};

/**
* @return {number}
*/
SmallestInfiniteSet.prototype.popSmallest = function() {
  if (this.heap.length > 0) {
      return this.heap.shift();
  }
  this.min_num += 1;
  return this.min_num - 1;    
};

/** 
* @param {number} num
* @return {void}
*/
SmallestInfiniteSet.prototype.addBack = function(num) {
  if (this.min_num > num && this.heap.indexOf(num) === -1) {
      this.heap.push(num);
      this.heap.sort((a, b) => a - b);
  }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */


/**
 * 효율이 조금 안 좋지만 코드가 간결해 보임
 */
class SmallestInfiniteSet {
  constructor() {
    this.arr = new Array(1001).fill(true);
  }
  popSmallest() {
    for (let i = 1; i < this.arr.length; i++) {
      if (this.arr[i]) {
        this.arr[i] = false;
        return i;
      }
    }
    return null;
  }
  addBack(num) {
    this.arr[num] = true;
  }
}