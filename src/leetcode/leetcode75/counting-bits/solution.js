/**
 * 문제 : https://leetcode.com/problems/counting-bits/submissions/1134666561/?envType=study-plan-v2&envId=leetcode-75
 * 24-08-03 - O
 * 24-07-31 - O
 * 24-07-30 - O
 * 24-07-28 - X
 * 24-01-02 - O
 */

/**
 * 24-08-03 - O
 */
var countBits = function(n) {
  let bitsArr = [];
  for(let i=0;i<=n;i++){
      let stirngBits = i.toString(2);
      let count = 0;
      stirngBits.split('').forEach((v)=>{
          if(v==='1') count++;
      })
      bitsArr.push(count);
  }
  return bitsArr;
};

/**
 * 24-07-31 - O
 */
var countBits = function(n) {
  let arr = [];
  for(let i =0;i<=n;i++){
      let count =0
      i.toString(2).split('').forEach((el)=>{
          if(el==='1'){
              count++;
          }
      });
      arr.push(count);
  }
  return arr;
};


/**
 * 24-07-30 - O
 */
var countBits = function(n) {
  let arr = [];
  for(let i =0;i<=n;i++){
      let count =0;
      i.toString(2).split('').map((v) => {
         if(v==='1'){
          count++;
         }
      });
      arr.push(count);
  }
  return arr;
};

/**
 * 24-07-28 - X
 * n의 숫자를 비트로 계산하여 1이 몇개인지 배열에 담기
 */
var countBits = function (n) {
  let arr = [0];
  for (let i = 1; i <= n; i++) {
    console.log();
    let bite = i.toString(2).split("");
    let count = 0;
    bite.forEach((el) => {
      if (el === "1") count++;
    });
    arr.push(count);
  }
  return arr;
};

/**
 *  내가 푼 방식
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    const reg = new RegExp("1", "g");
    if (i.toString(2).match(reg) === null) {
      arr[i] = 0;
    } else arr[i] = Number(i.toString(2).match(reg).length);
  }
  return arr;
};

// console.log(countBits(2))
console.log(countBits(5));

/**
 * 직접 2진수를 구하는 방식
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let rev = [];
  for (i = 0; i <= n; i++) {
    let x = helper(i);
    rev.push(x);
  }
  return rev;
};
function helper(n) {
  let count = 0;
  while (n > 0) {
    let r = n % 2;
    if (r == 1) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
}
