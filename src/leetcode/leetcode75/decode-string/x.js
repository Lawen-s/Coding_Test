/**
 * https://leetcode.com/problems/decode-string/submissions/1108192700/?envType=study-plan-v2&envId=leetcode-75
 * 24-10-29 - X
 * 24-10-25 - X
 * 24-03-19 - X
 * 23-11-28 - X
 */

/**
 * 24-10-29 - X
 */
var decodeString = function (s) {
  let stack = [];
  let currStr = "";
  let currNum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      stack.push(currStr);
      stack.push(currNum);
      currStr = "";
      currNum = 0;
    } else if (s[i] === "]") {
      let prevNum = stack.pop();
      let prevStr = stack.pop();
      currStr = prevStr + currStr.repeat(prevNum);
    } else if (s[i] >= "0" && s[i] <= "9") {
      currNum = currNum * 10 + Number(s[i]);
    } else {
      currStr += s[i];
    }
  }

  return currStr;
};

/**
 * 24-10-25 - X
 */
var decodeString = function (s) {
  let stack = [];
  let currStr = "";
  let currNum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      stack.push(currStr);
      stack.push(currNum);
      currStr = "";
      currNum = 0;
    } else if (s[i] === "]") {
      let prevNum = stack.pop();
      let prevStr = stack.pop();
      currStr = prevStr + currStr.repeat(prevNum);
    } else if (s[i] >= "0" && s[i] <= "9") {
      currNum = currNum * 10 + Number(s[i]);
    } else {
      currStr += s[i];
    }
  }

  return currStr;
};

/** 24-03-19 - X
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  let currStr = "";
  let currNum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      stack.push(currStr);
      stack.push(currNum);
      currStr = "";
      currNum = 0;
    } else if (s[i] === "]") {
      let prevNum = stack.pop();
      let prevStr = stack.pop();
      currStr = prevStr + currStr.repeat(prevNum);
    } else if (s[i] >= "0" && s[i] <= "9") {
      currNum = currNum * 10 + Number(s[i]);
    } else {
      currStr += s[i];
    }
  }

  return currStr;
};

/**
 * 23-11-28 - X
 * 통과 실패 테스트 케이스 2번에서 에러를 겪음
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let newArr = s.split("[").join();
  newArr = newArr.split("]");
  let newStr = "";
  for (let i = 0; i < newArr.length; i++) {
    let num = !isNaN(Number(newArr[i].split(",")[0]))
      ? newArr[i].split(",")[0]
      : 1;
    let str = newArr[i].split(",")[1]
      ? newArr[i].split(",")[1]
      : newArr[i].split(",")[0];
    newStr += str.repeat(num);
  }
  return newStr;
};

/**
 * 효율 낮음 그러나 통과
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let resultArr = [""];
  let timesStack = [];
  let times = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!Number.isNaN(Number(char))) {
      times = 10 * times + Number(char);
    } else if (char === "[") {
      timesStack.push(times);
      resultArr.push("");
      times = 0;
    } else if (char === "]") {
      const times = timesStack.pop();
      const subStr = resultArr.pop();
      resultArr[resultArr.length - 1] += subStr.repeat(times);
    } else {
      resultArr[resultArr.length - 1] += char;
    }
  }

  return resultArr[0];
};

/**
 *
 * while 문을 사용해서 풀수있는 부분
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  let curr, number, str;
  for (const c of s) {
    if (c !== "]") {
      stack.push(c);
      continue;
    }

    curr = stack.pop();
    str = "";
    while (curr !== "[") {
      str = curr + str;
      curr = stack.pop();
    }

    curr = stack.pop();
    number = "";
    while (!Number.isNaN(Number(curr))) {
      number = curr + number;
      curr = stack.pop();
    }

    stack.push(curr);
    stack.push(str.repeat(number));
  }

  return stack.join("");
};

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));
