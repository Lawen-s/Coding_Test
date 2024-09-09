/**
 *  https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75
 * 24-09-09 - O
 * 24-09-07 - O
 * 24-08-27 - O
 * 23-11-13 - O
 */

/**
 * 24-09-09 - O
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies);
  let arr = candies.map((v)=>v+extraCandies>=max);
  return arr;
};

/**
 * 24-09-07 - O
 */
var kidsWithCandies = function(candies, extraCandies) {
  let result = []
  for(let i =0;i<candies.length;i++){
      let max = candies[i]+extraCandies;
      let check = candies.filter((v)=>max<v).length>0?false:true;
      result.push(check);
  }
  return result;
};

/**
 * 24-08-27 - O 
 */
var kidsWithCandies = function(candies, extraCandies) {
  let arr = [];
  for(let i =0;i<candies.length;i++){
      let max = candies[i]+extraCandies;
      let test = candies.filter((v)=>max<v);
      test.length>0?arr.push(false):arr.push(true)
  }
  return arr;
};

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const maxNum = Math.max(...candies);
  return candies.map((candy)=>candy+extraCandies>=maxNum)
};


/**
 *  다시 풀음(24.01.31)
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies)
  return candies.map((x)=>{
    if(x+extraCandies>=max)return true
  else return false
})
};