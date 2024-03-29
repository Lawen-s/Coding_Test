/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75
 * 유클리드 호제법 (https://seunghyum.github.io/algorithm/Euclidean-algorithm/#)
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  function GCD(a, b) {
    if (a % b === 0) return b
    return GCD(b, a % b)
  }
  

  if (str1 + str2 !== str2 + str1) {
    return ""
  }
  const length = GCD(str1.length, str2.length)
  return str2.slice(0, length)
}

/**
 * 다시 틀림(최대 공약수를 구하는 방법이라고 생각하기)
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
 
         return "";
     }
 
     let n = str1.length;
 
     let k = str2.length;
 
     let gcds = function (x, y) {
         
         if (!y) {
             return x;
         }
         return gcds(y, x % y);
     }
 
     let div = gcds (n, k);
 
     return str1.slice(0, div);
 };
