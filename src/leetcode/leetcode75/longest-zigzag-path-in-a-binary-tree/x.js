/**
 * https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/submissions/1112235086/?envType=study-plan-v2&envId=leetcode-75
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
 *  내가 풀려고 했던 방식
 *  테스트 통과 못함(접근방식 변경 필요)
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
  let max = 0;
  function dfs(root, count) {
    if (!root) return;
    LeftDfs(root.left, count);
    RightDfs(root.right, count);
  }
  function LeftDfs(root, count) {
    if (!root) return;
    if (root.right !== null) {
      max++;
      RightDfs(root.right, max);
    } else {
      max = Math.max(max, count);
      LeftDfs(root.left, 0);
    }
  }
  function RightDfs(root, count) {
    if (!root) return;
    if (root.left !== null) {
      max++;
      LeftDfs(root.left, max);
    } else {
      max = Math.max(max, count);
      RightDfs(root.left, 0);
    }
  }
  dfs(root, 1);
  return max;
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
 * 풀이 참고
 * 다른사람이 푼 방법
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
  let max = 0;

  const helper = (node, prev, length) => {
    if (node === null) return null;

    max = Math.max(max, length);

    helper(node.left, "l", prev === "r" ? length + 1 : 1);
    helper(node.right, "r", prev === "l" ? length + 1 : 1);
  };

  helper(root, "l", 0);
  helper(root, "r", 0);

  return max;
};

/**
 * 효율 좋은 코드
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
  let maxCount = 0;
  dfs = (node, isLeft, count) => {
    if (!node) return;
    maxCount = Math.max(count, maxCount);
    if (isLeft) {
      dfs(node.right, false, count + 1);
      dfs(node.left, true, 1);
    } else {
      dfs(node.left, true, count + 1);
      dfs(node.right, false, 1);
    }
  };

  dfs(root, true, 0);
  dfs(root, false, 0);
  return maxCount;
};

console.log(longestZigZag([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]));
// console.log(longestZigZag([5,4,8,11,null,13,4,7,2,null,null,5,1]))
// console.log(longestZigZag())
