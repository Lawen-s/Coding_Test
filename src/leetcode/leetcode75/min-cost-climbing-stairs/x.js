/**
 * https://leetcode.com/problems/min-cost-climbing-stairs/?envType=study-plan-v2&envId=leetcode-75
 * 24-07-16 - X
 * 24-07-14 - X
 * 23-12-20 - X
 */

/**
 * 24-07-20 - O
 * @param {*} cost 
 * @returns 
 */
var minCostClimbingStairs = function(cost) {
    let one = cost[0];
    let two = cost[1];
    for(let i=2;i<cost.length;i++){
        let point = cost[i]+Math.min(one,two);
        one=two;
        two=point;
    }
    return Math.min(one,two);
};

/**
 * 24-07-16 - X
 * @param {*} cost 
 * @returns 
 */
var minCostClimbingStairs = function(cost) {
    let oneStep = cost[0];
    let twoStep = cost[1];
    for(let i =2;i<cost.length;i++){
        let stepCost = cost[i]+Math.min(oneStep,twoStep);
        oneStep=twoStep;
        twoStep=stepCost;
    }
    return Math.min(oneStep,twoStep);
};

/**
 * 24-07-14 - X
 * @param {*} cost 
 * @returns 
 */
var minCostClimbingStairs = function(cost) {
    if (cost.length === 1) return 0;
    if (cost.length === 2) return Math.min(cost[0], cost[1]);
    let first = cost[1]; //1
    let second = cost[0];//100
    for(let i =2;i<cost.length;i++){
        const minCost = cost[i] + Math.min(first, second);
        console.log({minCost})
        console.log({first})
        console.log({second})
        console.log('@@@@@')
        second = first;//1
        first = minCost;//2
    }
    return Math.min(first,second);
};

/**
 * 풀이를 보고 이해한 방식
 * 23-12-20 - X
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