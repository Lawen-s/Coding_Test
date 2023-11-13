/**
 *  https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/1097916630/?envType=study-plan-v2&envId=leetcode-75
 * 
 */


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