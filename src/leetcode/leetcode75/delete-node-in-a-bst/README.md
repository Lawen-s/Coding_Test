# 450.Delete-Node-In-A-Bst

# 링크
[leetcode.450](https://leetcode.com/problems/delete-node-in-a-bst/?envType=study-plan-v2&envId=leetcode-75)

# 날짜
* 24-04-23 - X
* 23-12-12 - X

# 문제 설명
#### 원문


Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.


Basically, the deletion can be divided into two stages:


1. Search for a node to remove.


2. If the node is found, delete the node.


# EXAMPLES
#### Example 1.


![Alt text](https://assets.leetcode.com/uploads/2020/09/04/del_node_1.jpg)


Input: root = [5,3,6,2,4,null,7], key = 3


Output: [5,4,6,2,null,null,7]


Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.


One valid answer is [5,4,6,2,null,null,7], shown in the above BST.


Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.


#### Example 2.


![Alt text](https://assets.leetcode.com/uploads/2020/09/04/del_node_supp.jpg)


Input: root = [5,3,6,2,4,null,7], key = 0


Output: [5,3,6,2,4,null,7]


Explanation: The tree does not contain a node with value = 0.


#### Example 3.


Input: root = [], key = 0


Output: []

