/**
 * 블로그: https://madplay.github.io/post/levenshtein-distance-edit-distance
 * 문제 : https://leetcode.com/problems/edit-distance/submissions/1134643640/?envType=study-plan-v2&envId=leetcode-75
 */


/**
 * 풀이 보고 이해
 * @param {*} word1 
 * @param {*} word2 
 * @returns 
 */
var minDistance = function(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(m+1).fill(null).map(() => new Array(n+1).fill(null));
  
  for (let i = 0; i <= m; i++) {
      dp[i][0] = i;
  }
  
  for (let j = 0; j <= n; j++) {
      dp[0][j] = j;
  }
  
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (word1[i-1] === word2[j-1]) {
              dp[i][j] = dp[i-1][j-1];
          } else {
              dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1;
          }
      }
  }
  
  return dp[m][n];
};

console.log(minDistance("horse","ros"))
