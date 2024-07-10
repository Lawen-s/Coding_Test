/**
 * https://leetcode.com/problems/combination-sum-iii/submissions/1124253942/?envType=study-plan-v2&envId=leetcode-75
 * 24-07-10 - X
 * 23-12-20 - X
 */

/**
 * 24-07-10 - X
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let newArr =[];
    function dfs(arr,sum,startNum){
        if(arr.length===k){
            if(sum===n) newArr.push(arr);
            return
        }else{
            for(let i=startNum;i<=9;i++){
                dfs([...arr,i],sum+i,i+1);
            }
        }
    }
    dfs([],0,1)
    return newArr
};

/**
 * 중간까지 비슷한 형식이였지만, 풀이를 참고하여 풀음
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let arr = [];
  function dfs(start,num,newArr){
      if(num>n||newArr.length>k){
          return;
      }
      if(newArr.length===k){
          if(num===n){
              arr.push(newArr);
          }
          return ;
      }
      for(let i=start; i<=9;i++){
          // newArr.push(i)
          dfs(i+1,num+i,[...newArr,i])
      }
  }
  dfs(1,0,[])
  return arr
};



/**
 * 효율 좋은 코드
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const res = [];
  const combination = [];
  const dfs = (i, sum) => {
      if (sum === n && combination.length === k) {
          res.push(combination.slice());
          return;
      }
      if (combination.length > k || sum > n || i > 9) {
          return;
      }

      combination.push(i);
      dfs(i + 1, sum + i);
      combination.pop();

      dfs(i + 1, sum);
  }

  dfs(1, 0);

  return res;
};