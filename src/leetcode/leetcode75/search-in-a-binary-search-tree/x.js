/**
 * https://leetcode.com/problems/search-in-a-binary-search-tree/submissions/1117262168/?envType=study-plan-v2&envId=leetcode-75
 * 24-04-23 - X
 * 23-12-11 - X
 */

/**
 * 24-04-23 - X
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  function bfs(node){
      if(!node) return null;
      if(node.val === val){
          return node

      }
      if(node.val > val) return bfs(node.left)
      if(node.val< val) return bfs(node.right)
  }
  return bfs(root)
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 23-12-11 - X - 풀이 참고
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  function dfs(node) {
    if (!node) return null;
    if (node.val === val) {
      return node;
    }
    if (node.val > val) {
      return dfs(node.left);
    }
    if (node.val < val) {
      return dfs(node.right);
    }
  }
  return dfs(root);
};

console.log(searchBST([4, 2, 7, 1, 3], 2));
