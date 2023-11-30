/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/34445/my-solution-in-javascript/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://www.algodale.com/problems/maximum-depth-of-binary-tree/
 * 영상 참고하여 풀음
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0;
  let stack = [{ node: root, depth: 1 }];
  let current = stack.pop();
  while (stack && current) {
    var node = current.node;
    max = Math.max(current.depth, max);
    if (node.left) {
      stack.push({ node: node.left, depth: current.depth + 1 });
    }
    if (node.right) {
      stack.push({ node: node.right, depth: current.depth + 1 });
    }
    current = stack.pop();
  }
  return max;
};

/**
 * 효율 좋은 방법
 * @param root
 * @returns
 */
var maxDepth = function (root) {
  if (root === undefined || root === null) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
// console.log(maxDepth([1,null,2]))
// console.log(maxDepth([]))
