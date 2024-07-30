/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/submissions/1133761344/?envType=study-plan-v2&envId=leetcode-75
 * 24-07-30 - O
 * 24-07-28 - X
 * 24-07-25 - X
 * 24-01-01 - X
 */

/**
 * 24-07-30 - O
 */
var maxProfit = function(prices, fee) {
  let income = 0;
  let minus = -prices[0];
  for(let i=0;i<prices.length;i++){
      let buy = income-prices[i];
      let sell = minus+prices[i]-fee;
      income=Math.max(income,sell);
      minus = Math.max(minus,buy);
      
  }
  return income;
};

/**
 * 24-07-28 - X
 */
var maxProfit = function (prices, fee) {
  let n = prices.length;
  let buy = 0;
  let sell = -prices[0];
  for (let i = 0; i < n; i++) {
    let cost = sell - fee + prices[i];
    buy = Math.max(buy, cost); // 수익 - 팔때, 안살떄,
    sell = Math.max(sell, buy - prices[i]); // 손해 - 팔때, 새로 살때
  }
  return buy;
};

/**
 * 24-07-25 - X
 * 이해한 풀이 해석
 * buying은 수익 = (안살때, 산걸 팔때)
 * selling은 손해 = (산걸 안팔때, 새로 살때)
 */
var maxProfit = function (prices, fee) {
  let len = prices.length,
    buying = 0,
    selling = -prices[0];
  for (let i = 1; i < len; i++) {
    buying = Math.max(buying, selling + prices[i] - fee);
    selling = Math.max(selling, buying - prices[i]);
  }
  return buying;
};

/**
 * 24-01-01 - X
 * 풀이를 옮김
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let bestInCash = 0;
  let bestWithStock = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    let buyThisRound = bestInCash - prices[i];
    let sellThisRound = bestWithStock + prices[i] - fee;
    // first option basically "do nothing this round"
    bestInCash = Math.max(bestInCash, sellThisRound);
    bestWithStock = Math.max(bestWithStock, buyThisRound);
  }

  return Math.max(bestWithStock, bestInCash);
};

/**
 * 효율이 좋은 코드
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let profit = 0,
    min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] > min + fee) {
      profit = profit + prices[i] - fee - min;
      min = prices[i] - fee;
    }
  }

  return profit;
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
