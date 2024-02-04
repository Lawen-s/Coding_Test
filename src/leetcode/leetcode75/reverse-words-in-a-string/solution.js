/**
 * https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 품(24.02.04)
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let splitStr = s.split(' ');
  console.log(splitStr)
  let newArr = splitStr.filter((x)=>x !== '').reverse()
  return newArr.join(' ')
};


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let splitString = s.split(" ");
  let reverseArray = splitString.reverse();
  let newArray = [];
  console.log(reverseArray)
  for(let i=0;i<reverseArray.length;i++){
      if(reverseArray[i]!==""){
          newArray.push(reverseArray[i])
      }
  }
  return newArray.join(" ")
};

reverseWords("heel thoe keing")
console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))