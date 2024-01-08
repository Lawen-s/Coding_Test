/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/submissions/1133761344/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 풀이를 옮김
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    
  let bestInCash = 0;
  let bestWithStock = -Infinity;

  for (let i = 0; i < prices.length; i++) {
      let buyThisRound = bestInCash - prices[i]
      let sellThisRound = bestWithStock + prices[i] - fee
      // first option basically "do nothing this round"
      bestInCash = Math.max(bestInCash, sellThisRound)
      bestWithStock = Math.max(bestWithStock, buyThisRound)
  }

  return Math.max(bestWithStock, bestInCash)
};

/**
 * 효율이 좋은 코드
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let profit = 0,
    min = prices[0]

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else if (prices[i] > min + fee) {
      profit = profit + prices[i] - fee - min
      min = prices[i] - fee
    }
  }

  return profit
}


console.log(maxProfit([1,3,2,8,4,9], 2))