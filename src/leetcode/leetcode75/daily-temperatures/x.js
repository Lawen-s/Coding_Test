/**
 * https://leetcode.com/problems/daily-temperatures/submissions/1140510319/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 내가 푼 방법(통과 못함)
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let newArr = []
  for(let i=0;i<temperatures.length;i++) {
    let count = 0;
    for(let j=i;j<temperatures.length;j++){
      if(i ===j){
        continue;
      }
      console.log(temperatures[j])
      console.log(temperatures[i])
      if(temperatures[i]>=temperatures[j]){
        count++;
        if(j===temperatures.length-1){
          newArr.push(0)
        }
      }
      else{
        count++
        newArr.push(count)
        if(j===temperatures.length){
          newArr.push(0)
        }
        break;
      }
      if(j===temperatures.length-1){
        newArr.push(0)
      }
    }
    if(i===temperatures.length-1){
      newArr.push(0)
    }

  }
  return newArr
};

/**
 * 풀이 참고 그러나 마지막 테스트 코드 통과 x
 * @param {*} temperatures 
 * @returns 
 */
var dailyTemperatures = function(temperatures) {
  let len = temperatures.length
  let ans = Array(len).fill(0)
  for(let i=0; i<len; i++){
      for(let j=i+1; j<len; j++){
          if(temperatures[j] > temperatures[i]){
              ans[i] = j - i;
              break;
          }
      }
  }
  return ans;
};

/**
 * 통과코드
 * @param {*} temperatures 
 * @returns 
 */
var dailyTemperatures = function(temperatures) {
  let result = new Array(temperatures.length).fill(0);
  let stack = []; // store a pair of [temperature, index]

  for (let i = 0; i < temperatures.length; i++) {
      while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
          let [temp, index] = stack.pop();
          result[index] = i - index;
      }
      stack.push([temperatures[i], i]);
  }
  return result; 
};

// console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
console.log(dailyTemperatures([30,40,50,60]))
// console.log(dailyTemperatures([30,60,90]))
// console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]))
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
console.log(dailyTemperatures([99,99,99,99,99,99,99]))