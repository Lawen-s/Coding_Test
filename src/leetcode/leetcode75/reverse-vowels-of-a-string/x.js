/**
 *  https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/1097916630/?envType=study-plan-v2&envId=leetcode-75
 * 24-08-28 - X
 * 24-02-04 - X
 */

/**
 * 24-08-28 - X
 */
var reverseVowels = function(s) {
  let vowels = ['a','e','i','o','u','A','E','I','O','U']
  let start = 0;
  let end = s.length-1;
  let arr = s.split('');
  while(start<end){
      if(vowels.includes(arr[start])&&vowels.includes(arr[end])){
          let temp = arr[start];
          arr[start]=arr[end];
          arr[end]=temp;
          start++;
          end--;
      }
      if(!vowels.includes(arr[start])){
          start++;
          }
      if(!vowels.includes(arr[end])){
          end--;
      }
  }
  return arr.join('');
};


/**
 *  풀이보고 이해(24.02.04)
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
  let stack = []
  for (let i = 0; i < s.length; i++) {
      if (vowels.indexOf(s[i]) !== -1) {
          stack.push(s[i])
      }
  }
  let ans = []
  for (let i = 0; i < s.length; i++) {
      if (vowels.indexOf(s[i]) !== -1) {
          ans.push(stack.pop())
      } else {
      ans.push(s[i])
      }
  }
  return ans.join('')
};


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const LEN = s.length;
  const str = [...s];
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const rev = [];
  for (let i = 0; i < LEN; i++) {
    if (vowels.includes(s[i])) { rev.push(s[i]); }
  }
  for (let i = 0; i < LEN; i++) {
    if (vowels.includes(str[i])) { str[i] = rev.pop(); }
  }
  return str.join('');
};

// ----------------------------------------------------------------
// TestCase Fail
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseVowels = function(s) {
//   let vowels = [];
//   let newString = "";
//   for(let i=0;i<s.length;i++){
//       if(s[i]==='a'||s[i]==='e'||s[i]==='i'||s[i]==='o'||s[i]==='u'||s[i]==='A'
//       ||s[i]==='E'||s[i]==='i'||s[i]==='O'||s[i]==='U'){
//           newString+=" "
//           vowels.push(s[i])
//       }else{
//           newString+=s[i]
//       }
//   }
//   let reverseVowels = vowels.reverse()
//   newString= newString.split("")
//   for(let i=0;i<newString.length;i++){
//       if(newString[i]===' '){
//           let popWord = reverseVowels.shift();
//           newString[i] = popWord
//       }
//   }
//   return newString.length>1?newString.join(""):s
// };