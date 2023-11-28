/**
 * https://leetcode.com/problems/removing-stars-from-a-string/submissions/1108130867/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let newArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      newArr.pop();
    } else {
      newArr.push(s[i]);
    }
  }
  return newArr.length > 0 ? newArr.join("") : "";
};

console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));
