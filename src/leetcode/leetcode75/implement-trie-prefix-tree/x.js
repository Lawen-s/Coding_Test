/**
 * 문제: https://leetcode.com/problems/implement-trie-prefix-tree/?envType=study-plan-v2&envId=leetcode-75
 * 24-08-05 - O
 * 24-08-04 - O
 * 24-01-04 - X
 */

/**
 * 24-08-05 - O
 */
var Trie = function() {
  this.arr= [];
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  this.arr = [...this.arr,word];
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  for(let i=0;i<this.arr.length;i++){
      if(this.arr[i] === word){
          return true;
      }
  }
  return false;
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  for(let i=0;i<this.arr.length;i++){
      let thisArrStr = this.arr[i].slice(0,prefix.length);
      if(thisArrStr === prefix){
          return true;
      }
  }
  return false;
};

/**
 * 24-08-04 - X
 */

var Trie = function() {
  this.arr =[]
  
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  this.arr = [...this.arr,word];
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  for(let i =0;i<this.arr.length;i++){
      if(this.arr[i]===word) return true;
  }
  return false;
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let wordLength = prefix.length;
  for(let i=0;i<this.arr.length;i++){
      if(this.arr[i].slice(0,wordLength)===prefix) return true;
  }
  return false;
};



/**
 * 풀이를 보고 이해 24-01-04 - X
 * 
 */
var Trie = function() {
  this.root= {}
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let node = this.root;
  word.split('').forEach((char)=>{
      if (!node[char]) node[char] = {};
      node = node[char];
  })
  node.isEnd = true;
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let node = this.searchNode(word);
  return node!=null?node.isEnd==true:false;
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let node = this.searchNode(prefix);
  return node != null;
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/
Trie.prototype.searchNode = function(word) {
  let node = this.root;
  for (let char of word.split('')) {
      if (node[char]) {
          node = node[char]
      } else {
          return null;
      }
  }
  return node;
}