/**
 *  https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75
 * 
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const maxNum = Math.max(...candies);
  return candies.map((candy)=>candy+extraCandies>=maxNum)
};