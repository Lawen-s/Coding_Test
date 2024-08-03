/**
 * 블로그: https://madplay.github.io/post/levenshtein-distance-edit-distance
 * 문제 : https://leetcode.com/problems/edit-distance/submissions/1134643640/?envType=study-plan-v2&envId=leetcode-75
 * 24-08-03 - O
 * 24-08-01 - O
 * 24-07-31 - O
 * 24-07-30 - X
 * 24-07-28 - X
 * 24-07-25 - X
 * 24-01-02 - X
 */

/**
 * 24-08-03 - O
 */
var minDistance = function(word1, word2) {
  let dp = Array.from({length:word1.length+1},()=>Array(word2.length+1).fill(0));
  dp.forEach((v,i)=>v[0]=i)
  dp[0].forEach((v,i)=>dp[0][i]=i)
  for(let i=1;i<=word1.length;i++){
      for(let j=1;j<=word2.length;j++){
          if(word1[i-1]===word2[j-1]){
              dp[i][j] = dp[i-1][j-1];
          }else{
              dp[i][j]=Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1])+1;
          }
      }
  }
  return dp[word1.length][word2.length];
};

/**
 * 24-08-01 - O
 */
var minDistance = function(word1, word2) {
  let dp = Array.from({length:word1.length+1},()=>Array(word2.length+1).fill(0));
  dp.forEach((v, i) => dp[i][0] = i);
  dp[0].forEach((v, i) => dp[0][i] = i);
  for(let i =1;i<=word1.length;i++){
      for(let j=1;j<=word2.length;j++){
          if(word1[i-1]===word2[j-1]){
              dp[i][j]=dp[i-1][j-1];
          }else{
              dp[i][j] = Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1])+1;
          }
      }
  }
  return dp[word1.length][word2.length]
};

/**
 * 24-07-31 - O
 */
var minDistance = function(word1, word2) {
  let dp = Array.from({length:word1.length+1},()=>Array(word2.length+1).fill(0));
  for(let i =0;i<=word1.length;i++){
      dp[i][0]=i
  }
  for(let i =0;i<=word2.length;i++){
      dp[0][i]=i
  }
  for(let i =1;i<=word1.length;i++){
      for(let j=1;j<=word2.length;j++){
          if(word1[i-1]!==word2[j-1]){
              dp[i][j]=Math.min(dp[i-1][j-1],dp[i][j-1],dp[i-1][j])+1;
          }else{
              dp[i][j]=dp[i-1][j-1];
          }
      }
  }
  return dp[word1.length][word2.length];
};

/**
 * 24-07-30 - X
 */
var minDistance = function(word1, word2) {
  let dp = Array(word1.length+1).fill().map(()=>Array(word2.length+1).fill(0));
  for(let i=0;i<word1.length+1;i++){
      dp[i][0]=i;
  }
  for(let i=0;i<word2.length+1;i++){
      dp[0][i]=i;
  }
  for(let i=1;i<=word1.length;i++){
      for(let j=1;j<=word2.length;j++){
          if(word1[i-1]===word2[j-1]){
              // dp[i][j]=Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1]);
              dp[i][j]=dp[i-1][j-1];
          }else{
              dp[i][j]=Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1])+1;
          }
      }
  }
  return dp[word1.length][word2.length]
};

/**
 * 24-07-28 - X
 */
var minDistance = function (word1, word2) {
  let dp = Array(word1.length + 1)
    .fill()
    .map(() => Array(word2.length + 1).fill(0));
  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i;
  }
  for (let i = 0; i <= word2.length; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return dp[word1.length][word2.length];
};

/**
 * 24-07-25 - X
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(null));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
};

/**
 * 풀이 보고 이해
 * @param {*} word1
 * @param {*} word2
 * @returns
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(null));

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
};

console.log(minDistance("horse", "ros"));
