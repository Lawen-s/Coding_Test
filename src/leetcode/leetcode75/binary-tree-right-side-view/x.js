/**
 * https://leetcode.com/problems/binary-tree-right-side-view/submissions/1112945244/?envType=study-plan-v2&envId=leetcode-75
 * 24-04-22 - X
 * 23-12-05 - X
 */

/** 24-04-22 - X - 풀이 보고 이해
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let arr = [];
  function dfs(node,n){
      if(!node){
          return
      }
      arr[n]=node.val
      dfs(node.left,n+1)
      dfs(node.right,n+1)
  }
  dfs(root,0)
  return arr
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
 * DFS로 풀려고 했으나 오류 발생
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  let rightArr = [];
  function bfs(root) {
    if (!root) return null;
    rightArr.push(root.val);
    bfs(root.right);
  }
  bfs(root);
  return rightArr;
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
 *  풀이 참고(효율 중간)
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  let res = [];
  pre(root, 0);
  return res;

  function pre(node, h) {
    if (!node) return;
    res[h] = node.val;
    pre(node.left, h + 1);
    pre(node.right, h + 1);
  }
};
