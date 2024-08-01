/**
 * https://leetcode.com/problems/unique-paths/submissions/1133677652/?envType=study-plan-v2&envId=leetcode-75
 * 24-08-01 - O
 * 24-07-31 - O
 * 24-07-30 - O
 * 24-07-28 - X
 * 24-07-24 - O
 * 24-07-23 - O
 * 24-07-22 - O
 * 24-07-21 - X
 * 24-01-01 - X
 */

/**
 * 24-08-01 - O
 */
var uniquePaths = function(m, n) {
  let location = Array.from({length:m},()=>Array(n).fill(1));
  for(let i=1;i<m;i++){
      for(let j=1;j<n;j++){
          location[i][j]=location[i-1][j]+location[i][j-1];
      }
  }
  return location[m-1][n-1];
};

/**
 * 24-07-31 - O
 */
var uniquePaths = function(m, n) {
  let location = Array.from({length:m}, ()=>Array(n).fill(1));
  for(let i=1;i<m;i++){
      for(let j=1;j<n;j++){
          location[i][j]=location[i-1][j]+location[i][j-1];
      }
  }
  return location[m-1][n-1]
};

/**
 * 24-07-30 - O
 */
var uniquePaths = function(m, n) {
  const MOD = 2*10**9;
  let location = Array.from({length:m},()=>Array(n).fill(1));
  for(let i =1;i<m;i++){
      for(let j=1;j<n;j++){
          location[i][j]=location[i-1][j]+location[i][j-1];
      }
  }
  return location[m-1][n-1] %MOD;
};

/**
 * 24-07-28 - X
 */
var uniquePaths = function (m, n) {
  let location = Array.from({ length: m }, () => Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      location[i][j] = location[i - 1][j] + location[i][j - 1];
    }
  }
  return location[m - 1][n - 1];
};

/**
 * 24-07-24 - O
 */
var uniquePaths = function (m, n) {
  let location = Array.from({ length: m }, () => Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      location[i][j] = location[i - 1][j] + location[i][j - 1];
    }
  }
  return location[m - 1][n - 1];
};

/**
 * 24-07-23 - O
 */
var uniquePaths = function (m, n) {
  let location = Array.from({ length: m }, () => Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      location[i][j] = location[i - 1][j] + location[i][j - 1];
    }
  }
  return location[m - 1][n - 1];
};

/**
 * 24-07-22 - O
 */
var uniquePaths = function (m, n) {
  let location = Array.from({ length: m }, () => Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      location[i][j] = location[i - 1][j] + location[i][j - 1];
    }
  }
  return location[m - 1][n - 1];
};

/**
 * 24-07-21 - X
 */
var uniquePaths = function (m, n) {
  let count = 0;
  let location = Array.from({ length: m }, () => Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      location[i][j] = location[i][j - 1] + location[i - 1][j];
    }
  }
  return location[m - 1][n - 1];
};

/**
 * 풀이보고 이해
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let ans = 1;
  for (let i = 1; i <= m - 1; i++) {
    ans = (ans * (n - 1 + i)) / i;
  }
  return ans;
};

/**
 * 다른 방식 풀이보고 옮김
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = new Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) dp[j] = dp[j] + dp[j - 1];
  }

  return dp[n - 1];
};

// console.log(uniquePaths(3, 7 ))
console.log(uniquePaths(3, 2));
