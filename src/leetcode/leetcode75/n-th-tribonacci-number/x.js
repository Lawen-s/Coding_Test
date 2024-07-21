/**
 * https://leetcode.com/problems/n-th-tribonacci-number/submissions/1124281231/?envType=study-plan-v2&envId=leetcode-75
 * 24-07-21 - O
 * 24-07-20 - O
 * 24-07-16 - O
 * 24-07-14 - O
 * 24-07-11 - O
 * 23-12-20 - X
 */

/**
 * 24-07-21 - O 
 */
var tribonacci = function(n) {
  let resultArr = [0,1,1];
  for(let i=3;i<=n;i++){
      let index = i%3;
      resultArr[index]=resultArr[index]+resultArr[(i+1)%3]+resultArr[(i+2)%3];
  }
  return resultArr[n%3];
};

/**
 * 24-07-20 - O
 * @param {*} n 
 * @returns 
 */
var tribonacci = function(n) {
  let numArr = [0,1,1];
  for(let i=3;i<=n;i++){
      let index = i%3;
      numArr[index]=numArr[(index + 2) % 3] + numArr[(index + 1) % 3] + numArr[index];
  }
  return numArr[n%3];
};

/**
 * 24-07-16 - O
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let arr = [0,1,1];
  for(let i =3;i<=n;i++){
      arr[i]=arr[i-3]+arr[i-2]+arr[i-1]
  }
  return arr[n];
};

/**
 * 24-07-14 - O
 * @param {*} n 
 * @returns 
 */
var tribonacci = function(n) {
  const fibonacci ={
      0:0,
      1:1,
      2:1,
  }
  if(n<=2){
  return fibonacci[n];
  }
  for(let i=3;i<=n;i++){
      fibonacci[i] = fibonacci[i-1]+fibonacci[i-2]+fibonacci[i-3];
  }
  return fibonacci[n];
};

/**
 * 24-07-11 - O
 * @param {*} n 
 * @returns 
 */
var tribonacci = function(n) {
  const numObj = {
      0:0,
      1:1,
      2:1,
  }
  if(n>2){
      for(let i=3;i<=n;i++){
          numObj[i]=numObj[i-1]+numObj[i-2]+numObj[i-3]
      }
  }
  return numObj[n]
};

/**
 * 23-12-20 - X
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