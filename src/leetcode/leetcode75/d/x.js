/**
 * https://leetcode.com/problems/path-sum-iii/submissions/1112208129/?envType=study-plan-v2&envId=leetcode-75
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
 * 풀이 블로그 참고
 * https://medium.com/nerd-for-tech/leetcode-path-sum-iii-84503ab5b050
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var dfs = function (root, previousSum, targetSum) {
  if (root == null) {
    return 0;
  }

  let currentSum = previousSum + root.val;
  let count = 0;

  if (currentSum == targetSum) {
    count = 1;
  }

  return (
    count +
    dfs(root.left, currentSum, targetSum) +
    dfs(root.right, currentSum, targetSum)
  );
};

var pathSum = function (root, targetSum) {
  if (root == null) {
    return 0;
  }
  return (
    dfs(root, 0, targetSum) +
    pathSum(root.left, targetSum) +
    pathSum(root.right, targetSum)
  );
};

const EMPTY_SET = new Set();

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *  풀이 참고(효율 좋음)
 *  Set을 사용하여 중복제거
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (root === null) {
    return 0;
  }

  let count = 0;

  const dfs = (node, sum, prefixMap) => {
    sum += node.val;
    count += sum === targetSum ? 1 : 0;
    count += prefixMap.get(sum - targetSum) || 0;
    const previousValue = prefixMap.get(sum) || 0;
    prefixMap.set(sum, previousValue + 1);

    if (node.left !== null) {
      dfs(node.left, sum, prefixMap);
    }

    if (node.right !== null) {
      dfs(node.right, sum, prefixMap);
    }

    prefixMap.set(sum, previousValue);
  };

  dfs(root, 0, new Map());

  return count;
};

//    1
//  3   2
// targetSum = 3
// count = 2
// node = Node(1), sum = 1, prefixMap = {1: 1, 4: 0}
// node = Node(3), sum = 4, prefixMap = {1: 1, 4: 0}
// node = Node(2), sum = 3, prefixMap = {1: 1, 4: 0}
