/**
 * https://leetcode.com/problems/leaf-similar-trees/submissions/1111485809/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 블로그를 참고함 (https://m.blog.naver.com/catasy/221330886618)
 * 거의 보고 따라 씀
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  var aRoot1 = [];
  var aRoot2 = [];
  dfs(root1, aRoot1);
  dfs(root2, aRoot2);

  return aRoot1.every((iValue, iIndex) => iValue == aRoot2[iIndex]);
};

var dfs = function (root, aLeaf) {
  if (root == null) {
    return false;
  }

  if (root.left == null && root.right == null) {
    aLeaf.push(root.val);
    return false;
  }

  dfs(root.left, aLeaf);
  dfs(root.right, aLeaf);
};

/**
 * 효율이 좋은 풀이
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  //create a function to extract the last nodes
  //call for the function inside the function to generte the last nodes.
  // create two arrays variables.
  //if both lengths of leaves1 and leaves2 are equals and the same elements in the same position to retun true

  dfs = function (node, leaves) {
    if (node !== null) {
      if (node.right === null && node.left === null) {
        leaves.push(node.val);
      }
      dfs(node.left, leaves);
      dfs(node.right, leaves);
    }
  };

  let leaves1 = [];
  let leaves2 = [];

  dfs(root1, leaves1);
  dfs(root2, leaves2);

  return (
    leaves1.length === leaves2.length &&
    leaves1.every((value, index) => value === leaves2[index])
  );
};

console.log(
  leafSimilar(
    [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
    [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]
  )
);
// console.log(leafSimilar([1,2,3], [1,3,2]))
