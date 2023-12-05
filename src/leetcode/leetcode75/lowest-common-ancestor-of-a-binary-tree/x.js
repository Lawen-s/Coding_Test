/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/1112903180/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 *  풀이 참고
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const dfs = (node) => {
    if (node === null) {
      return null;
    }

    if (node === p || node === q) {
      return node;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    return left && right ? node : left || right;
  };

  return dfs(root);
};

/**
 * 효율 좋은 풀이
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left || right;
};
