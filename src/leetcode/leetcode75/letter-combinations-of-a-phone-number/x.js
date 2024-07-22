/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/1123482159/?envType=study-plan-v2&envId=leetcode-75
 * 24-07-22 - O 
 * 24-07-21 - O 
 * 24-07-20 - O
 * 24-07-16 - X
 * 24-07-14 - O
 * 24-07-11 - X
 * 24-07-09 - X
 * 23-12-20 - X
 */

/**
 * 24-07-22 - O
 */
var letterCombinations = function(digits) {
    if(digits.length<1){
        return []
    }
    let arr =[];
    function dfs(str,startIdx){
        if(str.length===digits.length){
            arr.push(str);
            return;
        }else{
            let numberToStr = numbers[digits[startIdx]];
            for(let i=0;i<numberToStr.length;i++){
                dfs(str+numberToStr[i],startIdx+1);
            }
        }
    }
    dfs("",0)
    return arr;
};

/**
 * 24-07-21 - O
 * @param {string} digits
 * @return {string[]}
 */
const numbers={
    2:'abc',
    3:'def',
    4:'ghi',
    5:'jkl',
    6:'mno',
    7:'pqrs',
    8:'tuv',
    9:'wxyz'
}
var letterCombinations = function(digits) {
    let resultArr = [];
    if(digits.length<1){
        return [];
    }
    function dfs(str,count){
        if(count===digits.length){
            resultArr.push(str);
            return;
        }
            let numberToStr = numbers[digits[count]];
            for(let i =0;i<numberToStr.length;i++){
                dfs(str+numberToStr[i],count+1);
            }
        
    }
    dfs("",0);
    return resultArr;
};


/**
 * 24-07-20 - O
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let result = [];
    if(digits.length<1){
        return [];
    }
    function r (num,str){
        if(str.length===digits.length&&digits.length===num){
            result.push(str);
        }else{
            let numberStr = numbers[digits[num]];
            for(let i=0;i<numberStr.length;i++){
                r(num+1,str+numberStr[i])
            }
        }
    }
    r(0,"");
    return result;
};

/**
 * 24-07-16 - X
 * @param {*} digits 
 * @returns 
 */
var letterCombinations = function(digits) {
    if(digits.length<1){
        return []
    }
        let arr =[];
        function dfs(str,count){
            if(count===digits.length){
                arr.push(str);
                return
            }
            let someStr = phoneNumber[digits[count]];
            for(let i=0;i<someStr.length;i++){
                dfs(str+someStr[i],count+1)
            }
        }
        dfs("",0)
        return arr;
    };

/**
 * 24-07-14 - O
 */
const phoneNumberStr = {
    2:'abc',
    3:'def',
    4:'ghi',
    5:'jkl',
    6:'mno',
    7:'pqrs',
    8:'tuv',
    9:'wxyz'
}

var letterCombinations = function(digits) {
    let arr = [];
    if(digits.length<1){
        return [];
    }
    const bfs =(str,count)=>{
        if(digits.length===count){
            arr.push(str);
            return
        }
        let someStr = phoneNumberStr[digits[count]]
        for(let i=0;i<someStr.length;i++){
            bfs(str+someStr[i],count+1);
        }
    }
    bfs("",0);
    return arr; 
    
};


const phoneNumber = {
    2:'abc',
    3:'def',
    4:'ghi',
    5:'jkl',
    6:'mno',
    7:'pqrs',
    8:'tuv',
    9:'wxyz'
}
/**
 * 24-07-11 - X
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let arr = [];
    if(digits.length===0){
        return []
    }
    function dfs(str, count){
        if(digits.length===count){
            arr.push(str);
        }else{
            let phoneNumberStr = phoneNumber[digits[count]];
            for(let i=0;i<phoneNumberStr.length;i++){
                dfs(str+phoneNumberStr[i],count+1);
            }
            
        }
    }
    dfs('',0)
    return arr;
};


/**
 * 24-07-09 - X - 이전 풀이랑 비슷
 */
const numberToString = {
    2:["a","b","c"],
    3:["d","e","f"],
    4:["g","h","i"],
    5:["j","k","l"],
    6:["m","n","o"],
    7:["p","q","r","s"],
    8:["t","u","v"],
    9:["w","x","y","z"]
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const digitsSplit = digits.split('');
    const newArr = [];
    let digitsLength = digits.length
    if(!digitsLength) return []
    function dfs (count,newStr){
        if(count===digitsLength) newArr.push(newStr);
        else{
            let letters = numberToString[digits[count]];
            for(let i=0;i<letters.length;i++){
                dfs(count+1,newStr+letters[i]);
            }
        }
    }
    dfs(0,"")
    return newArr 
};

/**
 * 풀이를 보고 따라함
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const digit={
      1:[""],
      2:["a","b","c"],
      3:["d","e","f"],
      4:["g","h","i"],
      5:["j","k","l"],
      6:["m","n","o"],
      7:["p","q","r","s"],
      8:["t","u","v"],
      9:["w","x","y","z"],
  };
  let digitsLength = digits.length, result = [];
  if(!digitsLength) return [];
  function dfs(num,str){
      if(num===digitsLength) result.push(str);
      else{
          let letters = digit[digits[num]]
          for(let i =0; i<letters.length;i++){
              dfs(num+1,str+letters[i])
          }
      }
  }
  dfs(0,"");
  return result
};


/**
 * 효율 좋은 코드
 * @param {string} digits
 * @return {string[]}
 */
let nums = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jlk",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz"
}
var letterCombinations = function(digits) {
  let res = []
  const solve = (n, comb) => {
      if(n==digits.length){
          comb && res.push(comb);
          return;
      }
      for(let x of nums[digits.at(n)]){
          solve(n+1,comb+x);
      }
  }
  solve(0,"")
  return res;
};