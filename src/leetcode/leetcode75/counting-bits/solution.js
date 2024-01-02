/**
 * 문제 : https://leetcode.com/problems/counting-bits/submissions/1134666561/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 *  내가 푼 방식
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let arr = []
    for(let i =0;i<=n;i++){
      const reg = new RegExp('1', 'g');
      if (i.toString(2).match(reg) === null){
        arr[i] = 0;
      }
      else arr[i] = Number(i.toString(2).match(reg).length)
    }
    return arr
};

// console.log(countBits(2))
console.log(countBits(5))



/**
 * 직접 2진수를 구하는 방식
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let rev=[];
  for(i=0;i<=n;i++){
      let x=helper(i)
  rev.push(x)
  }
  return rev
};
function helper(n){
  let count=0
   while (n>0) {
      let r=n%2;
      if(r==1){
          count++
      }
      n=Math.floor(n/2);;
}
return count
}