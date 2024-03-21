/**
 * https://leetcode.com/problems/number-of-recent-calls/?envType=study-plan-v2&envId=leetcode-75
 * 24-03-21 - X
 * 23-11-29 - X
 */

/**
 * 24-03-21 - X
 * 문제가 이해가 안갔지만 블로그 보고 이해함
 */
var RecentCounter = function() {
  this.stream = []
};
RecentCounter.prototype.ping = function(t) {
  this.stream.push(t) // Everytime we recieve a ping, add the time to the stream of integers
/*
To exclude the times that are not included within the range of t - 3000,
we remove the first element from the stream while it is less than the calculated range 
*/
  while(this.stream[0] < t - 3000){ 
    this.stream.shift()
} 
  // When the loop ends the length of calls will be the length of the array
  return this.stream.length
};


/**
 * 23-11-29 - X
 * 문제가 이해가 가지 않아서 풀이랑 해답을 찾아봄
 */
var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
