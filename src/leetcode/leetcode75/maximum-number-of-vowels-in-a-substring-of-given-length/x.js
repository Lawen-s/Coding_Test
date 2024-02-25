/**
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/submissions/1102723214/?envType=study-plan-v2&envId=leetcode-75
 * 24.02.25 - X
 * 23.11.20 - X
*/

/**
 * 24.02.25 - 다른사람이 푼 코드보고 이해
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let maxCount = 0;
  let start = 0; // the left edge of the window
  let count = 0; // count of vowels for current substring
// expanding the right edge of the window one character at a time
  for (let end = 0; end < s.length; end++) {
    // increment count of vowels for current substring if the current character is present in vowels array
      if (vowels.includes(s[end])) {
          count +=1;
      }
      // if substring is longer than K, let's shrink the window by moving left edge
      if (end - start + 1 > k) {
        // reduce the current count by one if the character on the left edge is vowel
          if(vowels.includes(s[start])) {
              count -=1;
          }
    //shrinking the left edge of the window
          start +=1;
      }
  // checking if current count is larger than current maximum count
      maxCount = Math.max(maxCount, count)
  // if maxCount is equal to K, no need to check further, it is the max possible count
      if (maxCount == k) return maxCount;
  }
  return maxCount;
};

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
