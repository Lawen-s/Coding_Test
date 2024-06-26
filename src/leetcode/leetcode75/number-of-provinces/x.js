/**
 * https://leetcode.com/problems/number-of-provinces/submissions/1118897788/?envType=study-plan-v2&envId=leetcode-75
 * 24-04-29 - X
 * 23-12-13 - X
 */

/**
 * 24-04-29 - X - 풀이보고 이해 
 * @param {*} isConnected 
 * @returns 
 */
var findCircleNum = function(isConnected){
    // visited set
    const visited = new Set();
    // friend circles count
    let circles = 0;
	
    // iterate thru matrix
    for (let i = 0; i < isConnected.length; i++) {
        // check if this friend has been visited before
        if (!visited.has(i)) {
            // start dfs for this friend
            dfs(i);
            // this is another friend circle
            circles++;
        }
    }
	
    return circles;
	
    // helper method to do dfs traversal thru M
    function dfs(i) {
        // go thru this friend's friends
        for (let j = 0; j < isConnected.length; j++) {
            // check if this is a friend, and not visited before
            if (isConnected[i][j] === 1 && !visited.has(j)) {
                // add as visited
                visited.add(j);
                // call dfs
                dfs(j);
            }
        }
    }
}

/**
 * 23-12-13 - X
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