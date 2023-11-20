/**
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/submissions/1102723214/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 다른 사람이 푼 코드
 * @param {*} s
 * @param {*} k
 * @returns
 */
function maxVowels(s, k) {
  let maxCount = 0;
  let count = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      count++;
    }
    if (i >= k && vowels.has(s[i - k])) {
      count--;
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}

/**
 * 참고한 풀이
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let res = 0,
    cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (i >= k) {
      cnt -= isVowel(s[i - k]);
    }
    cnt += isVowel(s[i]);
    res = Math.max(res, cnt);
  }
  return res;
};

function isVowel(c) {
  return c == "a" || c == "e" || c == "i" || c == "o" || c == "u";
}

// console.log(maxVowels(s = "abciiidef", k = 3))
// console.log(maxVowels(s = "aeiou", k = 2))
console.log(maxVowels((s = "leetcode"), (k = 3)));
