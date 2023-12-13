/**
 * https://leetcode.com/problems/number-of-provinces/submissions/1118897788/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 정답보고 이해
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const seen = new Set();
  let res = 0;
  const dfs = (i) => {
      for(let j = 0; j < isConnected[0].length; j++) {
          if(isConnected[i][j] === 1 && !seen.has(j)) {
              seen.add(j);
              dfs(j);
          }
      }
  }
  for(let i = 0; i < isConnected.length; i++) {
      if(!seen.has(i)) {
          dfs(i);
          res++;
      }
  }
  return res;
};