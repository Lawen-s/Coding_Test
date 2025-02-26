class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    // 1. 첫번째 인덱스를 최소값으로 지정합니다.
    // 2. 한 개씩 이동하면 값을 비교합니다.
    // 3. 최소값으로 지정한 값보다 이동한 값이 작다면 바꿉니다.
    // 4. 최소값으로 지정한 값보다 크다면 차를 구합니다.
    let min = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < min) {
        min = prices[i];
      } else {
        profit = Math.max(profit, prices[i] - min);
      }
    }
    return profit;
  }
}
