/**
 * https://leetcode.com/problems/dota2-senate/submissions/1108913810/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 풀이를 직접 가져옴
 * 큐라고 생각했는데, 큐라고 생각안해도 되는거 같음
 * 참고 블로그(https://velog.io/@dev2022/Dota2-Senate)
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let queueR = [];
  let queueD = [];

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") {
      queueR.push(i);
    } else {
      queueD.push(i);
    }
  }

  while (queueR.length > 0 && queueD.length > 0) {
    if (queueR[0] < queueD[0]) {
      queueR.push(queueR[0] + senate.length);
    } else {
      queueD.push(queueD[0] + senate.length);
    }

    queueR.shift();
    queueD.shift();
  }

  return queueR.length > 0 ? "Radiant" : "Dire";
};

console.log(predictPartyVictory("RD"));
console.log(predictPartyVictory("RDD"));
