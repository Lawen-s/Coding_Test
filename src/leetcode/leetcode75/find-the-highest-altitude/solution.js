/**
 * https://leetcode.com/problems/find-the-highest-altitude/submissions/1192733876/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 *  2024-03-03 - O
 *  내가 푼 코드(효율 X)
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let maxNum = 0
    gain.reduce((acc,cur)=>{
      console.log(acc+cur)
    if(acc+cur>maxNum) {return maxNum=acc+cur}
    else{return acc+cur}
  },0)
  return maxNum
};

/** 풀이 확인(효율 좋음)
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  var highest =0;
  var curAtt = 0;
  for (var att of gain) {
      curAtt = att+curAtt;
      highest = Math.max(highest,curAtt);
  }
  return highest;
};

console.log(largestAltitude([-5,1,5,0,-7]))
// console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))