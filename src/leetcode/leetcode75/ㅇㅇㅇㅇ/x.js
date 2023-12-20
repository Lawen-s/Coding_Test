/**
 * https://leetcode.com/problems/n-th-tribonacci-number/submissions/1124281231/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 
 * 내가 푼 방식
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let arr = [0,1,1]
  if (n===0||n===1){
      return n
  }
  if(n===2) return 1

  for(let i =2; i<n;i++){
      if(i<=n-1){
        let sum = arr[i] + arr[i-1] + arr[i-2]
          arr.push(sum);
      }
  }
  return arr[n-3]+arr[n-2]+arr[n-1]
};

/**
 * 
 * 효율 좋은 풀이
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const result = new Array(n + 1).fill(-1);
  
  result[0] = 0;
  result[1] = 1;
  result[2] = 1;
  
  for (let i = 3; i <= n; i++) {
      result[i] = result[i - 1] + result[i - 2] + result[i - 3];
  }
  
  return result[n];
};


// console.log(tribonacci(4))
// console.log(tribonacci(5))
// console.log(tribonacci(25))