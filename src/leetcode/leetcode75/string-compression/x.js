/**
 * https://leetcode.com/problems/string-compression/submissions/1098706705/?envType=study-plan-v2&envId=leetcode-75
 * 2024-09-24 - X
 * 2024-09-23 - X
 * 2024-02-15 - X
 */

/**
 * 2024-09-24 - X
 */
var compress = function (chars) {
  let i = 0;
  let j = 0;
  while (j < chars.length) {
    let count = 0;
    let curr = chars[j];
    while (j < chars.length && chars[j] === curr) {
      j++;
      count++;
    }
    chars[i++] = curr;
    if (count > 1) {
      for (let digit of count.toString()) {
        chars[i++] = digit;
      }
    }
  }
  return i;
};

/**
 * 2024-09-23 - X
 */
var compress = function (chars) {
  let i = 0;
  let j = 0;
  while (j < chars.length) {
    let count = 0;
    let curr = chars[j];
    while (j < chars.length && chars[j] === curr) {
      j++;
      count++;
    }
    chars[i++] = curr;
    if (count > 1) {
      for (let digit of count.toString()) {
        chars[i++] = digit;
      }
    }
  }
  return i;
};

/**
 * 2024-02-15
 * 내가 푼 방식 - 테스트 코드 통과 x, 콘솔에서는 통과 테스트코드에서만 X
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  const result = new Map();
  for (let char of chars) {
    if (result.has(char)) {
      result.set(char, result.get(char) + 1);
    } else {
      result.set(char, 1);
    }
  }
  let newResult = "";
  result.forEach((v, k) => {
    if (v === 1) {
      newResult += k;
    } else {
      newResult += k + String(v);
    }
  });
  return newResult.split("");
};

/**
 * 2024-02-15
 * 풀이를 참고
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
  let index = 0;
  for (let i = 0; i < chars.length; i++) {
    let count = 1;
    while (i + 1 < chars.length && chars[i] === chars[i + 1]) {
      count++;
      i++;
    }
    chars[index++] = chars[i];
    if (count > 1) {
      let countStr = count.toString();
      for (let j = 0; j < countStr.length; j++) {
        chars[index++] = countStr[j];
      }
    }
  }
  return index;
};

/**
 * 내가 풀었던 부분(통과 안됨)
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  chars = chars.sort();
  let char = chars[0];
  let count = 1;
  let newStr = "";
  for (let i = 1; i < chars.length; i++) {
    if (char === chars[i]) {
      count += 1;
    } else {
      if (count === 1) {
        console.log(chars[i]);
        newStr += char;
        char = chars[i];
      } else {
        newStr += char + count;
        char = chars[i];
      }
    }
    if (chars.length - 1 === i) {
      newStr += char + count;
    }
  }
  return newStr === "" ? [char] : newStr.length;
};

/**
 * 검색한 풀이
 * https://youtu.be/az_l6tvJuh0?si=gNgDZ-_i-vaZDz1Z (유튜브 영상)
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
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

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
