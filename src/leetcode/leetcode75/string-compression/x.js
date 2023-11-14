/**
 * https://leetcode.com/problems/string-compression/submissions/1098706705/?envType=study-plan-v2&envId=leetcode-75
 * 내가 풀었던 부분(통과 안됨)
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  chars = chars.sort()
  let char = chars[0];
  let count = 1;
  let newStr = ""
  for(let i = 1; i < chars.length; i++) {
    if(char===chars[i]){
      count+=1;
    }else{
      if(count===1){
        console.log(chars[i])
        newStr+=char
        char=chars[i]
      }else{
        newStr+=char+count
        char=chars[i]
      }
    }
    if(chars.length-1===i){
      newStr+=char+count
    }
  }
  return newStr===""?[char]:newStr.length
};


/**
 * 검색한 풀이
 * https://youtu.be/az_l6tvJuh0?si=gNgDZ-_i-vaZDz1Z (유튜브 영상)
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let index = 0;
   let i = 0;
   while (i < chars.length) {
     let j = i;
     while (j < chars.length && chars[j] === chars[i]) {
       j++;
     }
     chars[index++] = chars[i];
     if (j - i > 1) {
       let count = j - i;
       for (let digit of count.toString()) {
         chars[index++] = digit;
       }
     }
     i = j;
   }
   return index;
 };



console.log(compress(["a","a","b","b","c","c","c"]))
console.log(compress(["a"]))
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))