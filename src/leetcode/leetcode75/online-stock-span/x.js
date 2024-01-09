/**
 * https://leetcode.com/problems/online-stock-span/?envType=study-plan-v2&envId=leetcode-75
 */
/**
 * 풀이를 보고 이해함
 */
var StockSpanner = function() {
  // maintain a monotonic stack for stock entry

  // definition of stock entry:
  // first parameter is price quote
  // second parameter is price span
  this.stack = [];  
};

/** 
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function(price) {
   let [curPrice, curSpan] = [price, 1];
  
  // Compute price span in stock data with monotonic stack
  while( this.stack.length && this.stack[this.stack.length-1].price <= curPrice ){
      
      prev = this.stack.pop();
      let [prevPrice, prevSpan] = [prev.price, prev.span];
      
      // update current price span with history data in stack
      curSpan += prevSpan
  } 
  this.stack.push( {price: curPrice, span:curSpan} );
  
  return curSpan;
};

/** 
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/


/**
 * 풀이에서 조금더 이해하기 쉬운 부분
 */
var StockSpanner = function() {
  this.prices = []; 
  this.spans = []; 
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let span = 1;

  while (this.prices.length > 0 && price >= this.prices[this.prices.length - 1]) {
      span += this.spans.pop();
      this.prices.pop();
  }

  this.prices.push(price);
  this.spans.push(span);

  return span;
};


