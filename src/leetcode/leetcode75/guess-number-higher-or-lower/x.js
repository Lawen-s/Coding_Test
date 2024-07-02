/**
 * https://leetcode.com/problems/guess-number-higher-or-lower/submissions/1122605289/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 24-07-02 - X
 */
var guessNumber = function(n) {
  let l = 0, r = n-1;
  while(l  <= r ){
      let mid = Math.floor((l+r)/2);
      let res = guess(mid);
      if(res == 0) return mid;
      else if (res == 1) l = mid+1;
      else r = mid-1;
  }
  return l;    
};

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * 풀이보고 이해, 중간값을 나눠서 크고 작고를 기준으로 조회
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let left = 1, right = n
  while (left < right) {
      const mid = left + Math.floor((right - left) / 2)
      const current = guess(mid)
      if (current === 0) return mid
      if (current === -1) right = mid
      else left = mid + 1
  }
  return left
};


/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * 
 * 효율이 좋은 풀이
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {


  let left = 1
  let right = n


  while(left <= right){
      let mid = Math.floor((left + right)/2)
      let pick = guess(mid)

      if(pick === 0) return mid

      if(pick == 1)left = mid+1
      else right = mid-1
  }

  return -1
};