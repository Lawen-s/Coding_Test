/**
 * https://leetcode.com/problems/min-cost-climbing-stairs/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 풀이를 보고 이해한 방식
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const num = cost.length;

      for (let i = 2; i < num; i++){
          cost[i] = Math.min(cost[i-2], cost[i-1]) + cost[i];
      }
      return Math.min(cost[num-1], cost[num-2]);

};



/**
 * 효율 비슷한 방식
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = cost => {
    for (let i = 2; i < cost.length; i++) {
        let one = cost[i - 1]
        let two = cost[i - 2]
        cost[i] = Math.min(one, two) + cost[i]
    }

    return Math.min(cost[cost.length - 1], cost[cost.length - 2])
}