/**
 * https://leetcode.com/problems/removing-stars-from-a-string/submissions/1108130867/?envType=study-plan-v2&envId=leetcode-75
 * 24-10-23 - O
 * 24-03-17 - O
 * 23-11-28 - O
 */

/**
 * 24-10-23 - O
 */
var removeStars = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  return arr.join("");
};

/**
 * 24-03-17 - O - 효율 좋지 않음
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  return s.split("").reduce((acc, cur, i) => {
    if (cur === "*") return acc.slice(0, acc.length - 1);
    else return (acc += cur);
  }, "");
};

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
