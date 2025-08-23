// https://school.programmers.co.kr/learn/courses/30/lessons/12909
function solution(s) {
  let splitS = s.split("");
  let splitSLen = splitS.length - 1;
  let before = [];
  for (let i = 0; i <= splitSLen; i++) {
    if (splitS[i] === "(") {
      before.push(splitS[i]);
    } else {
      if (before[before.length - 1] === "(" && before.length > 0) {
        before.pop();
      } else {
        return false;
      }
    }
  }
  return before.length > 0 ? false : true;
}
