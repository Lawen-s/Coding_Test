/**
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/submissions/1111504574/?envType=study-plan-v2&envId=leetcode-75
 * 24-04-15 - O
 * 23-12-03 - O 
 */

/**
 * 24-04-15 - O
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
  let count = 0;

  function dfs(node, max){
    if(node === null){
      return
    }
    if(node.val >=max){
      count++;
      max = node.val;
    }
    dfs(node.left, max)
    dfs(node.right, max)
  }
  dfs(root,root.val)
  return count
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
 *
 * 1 번 방법
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  // let max = root[0];
  let count = 0;
  function def(node, max) {
    if (!node) return;
    if (node.val >= max) {
      count++;
      max = node.val;
    }
    def(node.right, max);
    def(node.left, max);
  }
  def(root, root.val);
  return count;
};

/**
 *
 * 2번 방법 (1번보다 효율 좋음)
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let count = 0;
  function def(root, max) {
    if (root.val >= max) {
      count++;
      max = root.val;
    }
    if (root.right !== null) {
      def(root.right, max);
    }
    if (root.left !== null) {
      def(root.left, max);
    }
  }
  def(root, root.val);
  return count;
};
