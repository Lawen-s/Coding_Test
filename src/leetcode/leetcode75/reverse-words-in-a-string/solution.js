/**
 * https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75
 * 24-09-10 - O
 * 24-08-29 - O
 * 24-02-04 - O
 */

/**
 * 24-09-10 - O
 */
var reverseVowels = function (s) {
  let wordArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowelArr = s
    .split("")
    .filter((v) => wordArr.includes(v))
    .reverse();
  let sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    if (wordArr.includes(sArr[i])) {
      let vowel = vowelArr.shift();
      sArr[i] = vowel;
    }
  }
  return sArr.join("");
};

/**
 * 24-08-29 - O
 */
var reverseWords = function (s) {
  let wordsArr = s.split(" ").filter((word) => word !== "");
  let start = 0;
  let end = wordsArr.length - 1;
  while (start < end) {
    let temp = wordsArr[start];
    wordsArr[start] = wordsArr[end];
    wordsArr[end] = temp;
    start++;
    end--;
  }
  return wordsArr.join(" ");
};

/**
 * 품(24.02.04)
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let splitStr = s.split(" ");
  console.log(splitStr);
  let newArr = splitStr.filter((x) => x !== "").reverse();
  return newArr.join(" ");
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let splitString = s.split(" ");
  let reverseArray = splitString.reverse();
  let newArray = [];
  console.log(reverseArray);
  for (let i = 0; i < reverseArray.length; i++) {
    if (reverseArray[i] !== "") {
      newArray.push(reverseArray[i]);
    }
  }
  return newArray.join(" ");
};

reverseWords("heel thoe keing");
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
