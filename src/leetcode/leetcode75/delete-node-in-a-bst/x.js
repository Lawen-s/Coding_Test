/**
 * https://leetcode.com/problems/delete-node-in-a-bst/submissions/1118097323/?envType=study-plan-v2&envId=leetcode-75
 * 24-04-24 - X
 * 23-12-12 - X
 */
/**
 * 24-04-24 - X - 풀이 봄
 * @param {*} root 
 * @param {*} key 
 * @returns 
 */
var deleteNode = function(root, key) {
  function callDFS(node) {
      if(!node) return null;
      if(node.val === key) {
          if(!node.left) return node.right;
          if(!node.right) return node.left;
          let curr = node.right;
          while(curr.left) curr = curr.left;
          curr.left = node.left;
          return node.right;
      }
      if(key > node.val) node.right = callDFS(node.right);
      else node.left = callDFS(node.left);
      return node;
  }
  return callDFS(root)
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
 * 풀이 참고
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  function dfs(node) {
    if (!node) return null;
    if (node.val === key) {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let curr = node.right;
      while (curr.left) curr = curr.left;
      curr.left = node.left;
      return node.right;
    }
    if (key > node.val) node.right = dfs(node.right);
    else node.left = dfs(node.left);
    return node;
  }
  return dfs(root);
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
 * 효율 좋은 풀이
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return null;
  if (root.val === key) {
    if (root.left == null) return root.right;
    if (root.right == null) return root.left;

    //get the min value in right subtree
    let minNode = getMin(root.right);
    root.right = deleteNode(root.right, minNode.val);
    minNode.left = root.left;
    minNode.right = root.right;
    root = minNode;
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  return root;
};

const getMin = function (node) {
  while (node.left !== null) node = node.left;
  return node;
};

// console.log(deleteNode([5,3,6,2,4,null,7],  3))
// console.log(deleteNode([5,3,6,2,4,null,7], 0))
