/**
 * https://leetcode.com/problems/total-cost-to-hire-k-workers/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 풀이를 보고 이해, 아직 PriorityQueue(우선순위 큐) 이해도를 높일 필요가 있음
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
 /**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
 const totalCost = (costs, k, m) => {
  let pq = new MinPriorityQueue({
      compare: (x, y) => {
          if (x[0] != y[0]) return x[0] - y[0];
          return x[1] - y[1];
      }
  });
  let n = costs.length, l = 0, r = n - 1, res = 0;
  for (let i = 0; i < m; i++) {
      if (l <= r) {
          pq.enqueue([costs[l], l]);
          l++;
      }
  }
  for (let i = 0; i < m; i++) {
      if (l <= r) {
          pq.enqueue([costs[r], r]);
          r--;
      }
  }
  for (let i = 0; i < k; i++) {
      let current = pq.dequeue();
      res += current[0];
      if (current[1] < l && l <= r) {
          pq.enqueue([costs[l], l]);
          l++;
      } else if (current[1] > r && l <= r) {
          pq.enqueue([costs[r], r]);
          r--;
      }
  }
  return res;
};
