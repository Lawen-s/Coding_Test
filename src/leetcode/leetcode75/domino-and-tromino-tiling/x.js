/**
 * https://leetcode.com/problems/domino-and-tromino-tiling/?envType=study-plan-v2&envId=leetcode-75
 * 24-07-24 - O
 * 24-07-23 - O
 * 24-07-22 - O
 * 24-07-21 - X
 * 24-07-20 - X
 * 23-12-28 - X
 */

/**
 * 24-07-24 - O 
 */
var numTilings = function(n) {
  const MOD = 10**9 + 7;
  let dp ={};
  dp[1]=1;
  dp[2]=2;
  dp[3]=5;
  for(let i =4;i<=n;i++){
      dp[i]=(2*dp[i-1]+dp[i-3])%MOD;
  }
  return dp[n];
};

/**
 * 24-07-23 - O
 */
var numTilings = function(n) {
  const MOD = 10**9 +7;
  let dp = {};
  dp[1]=1;
  dp[2]=2;
  dp[3]=5;
  for(let i=4;i<=n;i++){
      dp[i]=(2*dp[i-1]+dp[i-3])%MOD;
  }
  return dp[n];
};

/**
 * 24-07-22 - O
 */
var numTilings = function(n) {
  const MOD = 10**9+7
  let dp = {};
  dp[1]=1;
  dp[2]=2;
  dp[3]=5;
  for(let i=4;i<=n;i++){
      dp[i]=(2*dp[i-1]+dp[i-3])%MOD;
  }
  return dp[n]
};

/**
 * 24-07-21 - X
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
  const MOD = 10**9+7;
  let dp = {};
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;
  for(let i =4;i<=n;i++){
      dp[i]=(2*dp[i-1] +dp[i-3])%MOD;
  }
  return dp[n];
};

/**
 * 24-07-20 - X
 */
var numTilings = function(n) {
  const MOD = Math.pow(10,9)+7;
  let dp ={};
  dp[1]=1;
  dp[2]=2;
  dp[3]=5;
  for(let i=4;i<=n;i++){
      dp[i]=(2*dp[i-1]+dp[i-3])%MOD;
  }
  return dp[n];
};


/**
 * 점화식으로 풀어야하는 문제
 * 풀이를 보고 이해
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
  const MOD = Math.pow(10,9) + 7
      let dp = {}
      dp[1] = 1
      dp[2] = 2
      dp[3] = 5
      for (let i = 4; i <= n ; i++) {
          dp[i] = (2 * dp[i-1] + dp[i-3]) % MOD
      }
      return dp[n];
  };




/**
 * 효율 좋은 코드
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
  var dp = [1,1,2]
  if(n < 3) return dp[n];
  var mod = 1000000007;
  for(var i = 3; i <= n; i++) {
      dp[i] = (dp[i-1]*2 + dp[i-3])%mod;
  }
  return dp[n]
  
};