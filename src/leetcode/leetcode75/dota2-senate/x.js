/**
 * https://leetcode.com/problems/dota2-senate/submissions/1108913810/?envType=study-plan-v2&envId=leetcode-75
 * 24-03-21 - X
 * 23-11-29 - X
 */

/**
 * 24-03-21 - X - 풀이 보고 이해
 * @param {string} senate
 * @return {string}
 */
function predictPartyVictory(senate) {
  // Initialize two arrays to keep track of the indices of the senators from each party.
  let radiant = [];
  let dire = [];
  const n = senate.length;

  // Loop through each senator in the given order.
  for (let i = 0; i < n; i++) {
    // If the senator is from the Radiant party, add their index to the radiant array
    // with an offset of n, representing their vote in the next round.
    if (senate[i] === 'R') {
      radiant.push(i + n);
    } else {
      // If the senator is from the Dire party, add their index to the dire array
      // with an offset of n, representing their vote in the next round.
      dire.push(i + n);
    }
  }

  // Loop through each round until one party has all the votes.
  while (radiant.length > 0 && dire.length > 0) {
    // Compare the indices of the first senator from each party.
    if (radiant[0] < dire[0]) {
      // If the Radiant senator's index is less than the Dire senator's index,
      // add their index to the end of the radiant array with an offset of n,
      // representing their vote in the next round.
      radiant.push(radiant[0] + n);
    } else {
      // If the Dire senator's index is less than or equal to the Radiant senator's index,
      // add their index to the end of the dire array with an offset of n,
      // representing their vote in the next round.
      dire.push(dire[0] + n);
    }
    // Remove the first senator from each party's array, since they have voted in this round.
    radiant.shift();
    dire.shift();
  }

  // Return the winner of the voting procedure based on which party has remaining votes.
  return (radiant.length > 0) ? "Radiant" : "Dire";
}

/**
 * 23-11-29 - X
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
