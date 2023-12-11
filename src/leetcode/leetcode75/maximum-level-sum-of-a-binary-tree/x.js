/**
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/submissions/1117239284/?envType=study-plan-v2&envId=leetcode-75
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
 * 내가 풀었던 방식(풀지 못했지만 DFS 방식으로 접근)
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  let value = new Map();
  let arr = [];
  function bfs(root, depth) {
    if (!root) return null;
    if (arr[depth]) {
      let sum = root.val;
      arr[depth] += root.val;
    } else {
      arr[depth] = root.val;
    }
    bfs(root.right, depth + 1);
    bfs(root.left, depth + 1);
  }
  bfs(root, 1);
  return arr;
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
 * 풀이 참고한 방식
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  let arr = [-Infinity];
  function bfs(root, depth) {
    if (!root) return null;
    if (arr[depth] !== undefined) {
      arr[depth] += root.val;
    } else {
      arr.push(root.val);
    }
    bfs(root.right, depth + 1);
    bfs(root.left, depth + 1);
  }
  bfs(root, 1);
  return arr.indexOf(Math.max(...arr));
};

console.log(maxLevelSum([1, 7, 0, 7, -8, null, null]));
