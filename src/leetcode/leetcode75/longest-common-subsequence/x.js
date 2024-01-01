/**
 * 참고 블로그 : https://velog.io/@emplam27/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B7%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-LCS-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Longest-Common-Substring%EC%99%80-Longest-Common-Subsequence
 * 문제 : https://leetcode.com/problems/longest-common-subsequence/submissions/1133734801/?envType=study-plan-v2&envId=leetcode-75
 */

/**
* 내가 푼 코드 (틀림)
* @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let newStr ='';
  for(let i =0;i<text1.length;i++){
      for(let j=0; j<text2.length;j++){
          if(text1[i]===text2[j]){
            console.log(text1[i])
              newStr+=text1[i]
              break;
          }
      }
  }

  return newStr.length
};



/**
 *  참고한 코드
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let dp = new Array(text1.length+1).fill(null).map(() => new Array(text2.length+1).fill(0));

  for (let i = 1; i <= text1.length; i++) {
      for (let j = 1; j <= text2.length; j++) {
          if (text1[i-1] === text2[j-1]) {
              dp[i][j] = dp[i-1][j-1] + 1;
          } else {
              dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
          }
      }
  }
  
  return dp[text1.length][text2.length];
};


/**
 * 효율이 좋은 코드
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let dp = new Array(text1.length + 1)

  for(let i = 0; i <= text1.length; i++) {
      dp[i] = new Array(text2.length + 1).fill(0)
  }

  for(let i = 1; i <= text1.length; i++) {
      for(let j = 1; j <= text2.length; j++) {
          if(text1[i-1] === text2[j-1]) {
              dp[i][j] = dp[i-1][j-1] + 1
          } else {
              dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
          }
      }
  }

  return dp[text1.length][text2.length]
};


// console.log(longestCommonSubsequence(text1 = "abcde", text2 = "ace" ))
console.log(longestCommonSubsequence(text1 = "ezupkr", text2 = "ubmrapg" ))