/**
 * 문제:https://leetcode.com/problems/search-suggestions-system/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 풀이를 보고 이해
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  products.sort();
  
  let trie = {};
  for (let p of products) {
      let root = trie;
      for (let i=0;i<p.length;i++) {
          if (!root[p[i]]) root[p[i]] = {'sug':[]};
          if (root[p[i]]['sug'].length < 3) root[p[i]]['sug'].push(p);    
          root = root[p[i]];
      }
  }
  
  let root = trie, res = [];
  for (let i=0;i<searchWord.length;i++) {
      if (root) root = root[searchWord[i]];
      res.push(!root?[]:root['sug']);
  }
  
  return res;
};

console.log(suggestedProducts(products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"))
console.log(suggestedProducts(products = ["havana"], searchWord = "havana"))

/**
 * 효율이 좋은 코드
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  products.sort();
  const result = [];

  let l = 0, r = products.length - 1;
  for(let i = 0; i < searchWord.length; i++){
      const char = searchWord[i];

      while(l <= r && (products[l].length <= i || products[l][i] !== char)){
          l += 1;
      }
      while(l <= r && (products[r].length <= i || products[r][i] !== char)){
          r -= 1;
      }
      
      const words = [];
      const remain = r - l + 1;
      for(let j = 0; j < Math.min(3, remain); j++){
          words.push(products[l + j]);
      }

      result.push(words);
  }

  return result;
};