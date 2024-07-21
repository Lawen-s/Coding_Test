/**
 * https://leetcode.com/problems/combination-sum-iii/submissions/1124253942/?envType=study-plan-v2&envId=leetcode-75
 * 24-07-21 - O 
 * 24-07-20 - O
 * 24-07-16 - O
 * 24-07-14 - O
 * 24-07-11 - X
 * 24-07-10 - X
 * 23-12-20 - X
 */


/**
 * 24-07-21 - O 
 * @param {*} k 
 * @param {*} n 
 * @returns 
 */
var combinationSum3 = function(k, n) {
    let resultArr = [];
    function dfs(numArr,sum,startIdx){
        if(sum===n&&numArr.length===k){
            resultArr.push(numArr);
            return;
        }else{
        for(let i=startIdx;i<=9;i++){
            dfs([...numArr,i],sum+i,i+1);
        }
        }
    }
    dfs([],0,1)
    return resultArr;
};

/**
 * 24-07-20 - O
 * @param {*} k 
 * @param {*} n 
 * @returns 
 */
var combinationSum3 = function(k, n) {
    let result = [];
    function r (sum,count,arr,start){
        if(sum===n&&count===k){
            result.push(arr);
            return;
        }
        for(let i =start;i<=9;i++){
            r(sum+i,count+1,[...arr,i],i+1);
        }
    }
    r(0,0,[],1);
    return result;
};


/**
 * 24-07-16 - O
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let arr = [];
    function bfs(sum,startNum,numArr){
        if(sum===n&&numArr.length===k){
            arr.push(numArr);
            return;
        }
        for(let i =startNum;i<=9;i++){
            bfs(sum+i,i+1,[...numArr,i])
        }
    }
    bfs(0,1,[])
    return arr;
};

/**
 * 24-07-14 - O
 * @param {*} k 
 * @param {*} n 
 * @returns 
 */
var combinationSum3 = function(k, n) {
    let arr = [];
    const bfs =(numArr,sum,startIdx)=>{
        if(sum===n&&numArr.length===k){
            arr.push(numArr);
            return;
        }else{
            for(let i =startIdx;i<=9;i++){
                bfs([...numArr,i],sum+i,i+1);
            }
        }
        
    }
    bfs([],0,1)
    return arr;
};

/**
 * 24-07-11 - X - 반복문에서 9로 제한하지 않으면 타임에러 발생
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let arr = [];
    function dfs(sum,numArr,startNum){
        if(numArr.length===k){
            if(sum===n) arr.push(numArr);
            return
        }else{
            for(let i=startNum;i<=9;i++){
                dfs(sum+i,[...numArr,i],i+1)
            }
        }
    }
    dfs(0,[],1)
    return arr;
};

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