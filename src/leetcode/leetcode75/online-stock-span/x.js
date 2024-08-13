/**
 * https://leetcode.com/problems/online-stock-span/?envType=study-plan-v2&envId=leetcode-75
 * 문제 설명 블로그 - https://msk2021.tistory.com/entry/LeetcodePython-901-Online-Stock-Span
 * 24-08-13 - O
 * 24-08-12 - O
 * 24-08-11 - O
 * 24-01-09 - X
 */

/**
 * 24-08-13 - O
 */
var StockSpanner = function() {
  this.stack = [];
};
/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.stack = [...this.stack,price];
    let count =0;
    let stackLength = this.stack.length-1;
    while(stackLength>=0){
        if(this.stack[stackLength]>price){
            break;
        }else{
            count++;
        stackLength--;
        }
    }
    return count;
};

/**
 * 24-08-12 - O
 */
var StockSpanner = function() {
  this.arr = [];
};

/** 
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function(price) {
  let count = 1;
  for(let i=this.arr.length-1;i>=0;i--){
      if(this.arr[i]>price){
          break;
      }
      count++;
  }
  this.arr = [...this.arr,price];
  return count;
};

/**
 * 24-08-11 - O
 */
var StockSpanner = function() {
  this.arr = [null];
  this.result = [];
};

/** 
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function(price) {
  this.arr = [...this.arr,price];
  let count =0;
  for(let i =this.arr.length-1;i>0;i--){
      if(this.arr[this.arr.length-1]<this.arr[i]){
          return count;
      }else{
          count++;
      }
  }
  return count;
};



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


