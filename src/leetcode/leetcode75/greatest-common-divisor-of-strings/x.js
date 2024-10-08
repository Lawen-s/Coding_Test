/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75
 * 유클리드 호제법 (https://seunghyum.github.io/algorithm/Euclidean-algorithm/#)
 * 24-09-09 - O
 * 24-09-07 - O
 * 24-08-28 - O
 * 24-08-27 - X
 * 24-08-20 - X
 * 24-08-15 - X
 * 23-11-12 - X
 */

/**
 * 24-09-09 - O
 */
var gcdOfStrings = function(str1, str2) {
    if(str1+str2!==str2+str1)return '';
    let str1Num = str1.length;
    let str2Num = str2.length;
    let oneAndTwoRest = str1Num%str2Num;
    function gcd(num,rest){
        if(rest===0){
            return num;
        }
        return gcd(rest,num%rest);
    }
    let gcdNum = gcd(str2Num,oneAndTwoRest);
    return str1.slice(0,gcdNum);
}

/**
 * 24-09-07 - O
 */
var gcdOfStrings = function(str1, str2) {
    if(str1+str2!==str2+str1){
        return "";
    }
    let num1 = str1.length;
    let num2 = str2.length;
    let num1And2Rest = num1%num2;

    function gcd(num , rest){
        if(rest===0){
            return num;
        }
        let numRest = num%rest;
        return gcd(rest,numRest);
    }
    let gcdNum = gcd(num2,num1And2Rest);
    return str1.slice(0,gcdNum);
}

/**
 * 24-08-28 - O
 */
var gcdOfStrings = function(str1, str2) {
    if(str1+str2 !== str2+str1){
        return '';
    }
    let str1Len = str1.length;
    let str2Len = str2.length;
    function gcd(num, rest){
        if(!rest){
            return num;
        }
        return gcd(rest,num%rest);
    }
    return str1.slice(0,gcd(str2Len,str1Len%str2Len))
};

/**
 * 24-08-27 - X
 */
var gcdOfStrings = function(str1, str2) {
    if(str1+str2!==str2+str1){
        return "";
    }
    function gcd(num, rest){
        if(!rest){
            return num;
        }
        return gcd(rest,num%rest)
    }
    let str1Len = str1.length;
    let str2Len = str2.length;
    let strRest = (str1Len%str2Len);
    return str1.slice(0,gcd(str2Len,strRest))
};

/**
 * 24-08-20 - X
 */
var gcdOfStrings = function(str1, str2) {
  if(str1+str2!==str2+str1){
      return '';
  }
 function gcd(m,n){
  if(m<n){
      let t = m;
      m=n;
      n=t;
  }
  if(n===0){
      return m;
  }
  if(m%n===0){
      return n;
  }else{
      return gcd(n,m%n);
  }
 }
 let num = gcd(str1.length,str2.length);
 return str1.slice(0,num) ===str2.slice(0,num)?str1.slice(0,num):'';
};

/**
 * 24-08-15 - X
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


/**
 * 23-11-12 - X
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
