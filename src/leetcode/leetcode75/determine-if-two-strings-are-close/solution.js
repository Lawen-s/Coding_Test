/**
 * https://leetcode.com/problems/determine-if-two-strings-are-close/submissions/1104882939/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 내가 푼 코드 효율 X(블로그를 보고 풀이의 이해도를 높임)
 * 참고 블로그 1. https://withhamit.tistory.com/521
 * 참고 블로그 2. https://velog.io/@hozzijeong/LeetCode-Determine-if-Two-Strings-Are-Close
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  let checkWord1 = new Set(word1);
  let checkWord2 = new Set(word2);
  let checkWordObj1 = {};
  let checkWordObj2 = {};
  if (checkWord1.length !== checkWord2.length) return false;
  checkWord1.forEach((x) => (checkWordObj1[x] = 0));
  checkWord2.forEach((x) => (checkWordObj2[x] = 0));
  for (let i of word1) {
    if (Object.keys(checkWordObj2).includes(i)) {
      checkWordObj1[i]++;
    } else {
      return false;
    }
  }
  for (let i of word2) {
    if (Object.keys(checkWordObj1).includes(i)) {
      checkWordObj2[i]++;
    } else {
      return false;
    }
  }
  // let newArr1 = Object.entries(checkWordObj1).sort().reduce((acc,[key,value])=>acc+=value,0)
  // let newArr2 = Object.entries(checkWordObj2).sort().reduce((acc,[key,value])=>acc+=value,0)
  let newArr1 = Object.entries(checkWordObj1)
    .map(([key, value]) => value)
    .sort();
  let newArr2 = Object.entries(checkWordObj2)
    .map(([key, value]) => value)
    .sort();

  return newArr1.toString() === newArr2.toString();
};

/**
 * 다른 사람이 푼 코드 (효율 중간) - 높은건 unicode를 이야기함
 * @param {*} word1
 * @param {*} word2
 * @returns
 */
function closeStrings(word1, word2) {
  if (word1.length !== word2.length) return false;

  const dic1 = new Map();
  const dic2 = new Map();
  for (let i = 0; i < word1.length; i++) {
    dic1.set(word1[i], (dic1.get(word1[i]) ?? 0) + 1);
    dic2.set(word2[i], (dic2.get(word2[i]) ?? 0) + 1);
  }

  if ([...dic1.keys()].some((char) => !dic2.has(char))) return false;

  const freqsDic1 = [...dic1.values()];
  const freqsDic2 = [...dic2.values()];
  return freqsDic1.every((freq) => {
    const sameFreqIndex = freqsDic2.indexOf(freq);
    if (sameFreqIndex === -1) return false;
    freqsDic2[sameFreqIndex] = -1;
    return true;
  });
}

console.log(closeStrings("abc", "bca"));
console.log(closeStrings("a", "aa"));
console.log(closeStrings("cabbba", "abbccc"));
console.log(closeStrings("abbzzca", "babzzcz"));
