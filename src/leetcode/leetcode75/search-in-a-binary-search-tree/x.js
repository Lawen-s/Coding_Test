/**
 * https://leetcode.com/problems/search-in-a-binary-search-tree/submissions/1117262168/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 풀이 참고
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
