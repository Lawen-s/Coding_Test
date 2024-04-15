# 872.Count-Good-Nodes-In-Binary-Tree

# 링크
[leetcode.1448](https://leetcode.com/problems/count-good-nodes-in-binary-tree/?envType=study-plan-v2&envId=leetcode-75)

# 날짜
* 24-04-15 - O
* 23-12-03 - O

# 문제 설명
#### 원문


Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.


Return the number of good nodes in the binary tree.


***

# EXAMPLES
#### Example 1.


![Alt text](https://assets.leetcode.com/uploads/2020/04/02/test_sample_1.png)


Input: root = [3,1,4,3,null,1,5]


Output: 4


Explanation: Nodes in blue are good.


Root Node (3) is always a good node.


Node 4 -> (3,4) is the maximum value in the path starting from the root.


Node 5 -> (3,4,5) is the maximum value in the path


Node 3 -> (3,1,3) is the maximum value in the path.


#### Example 2.


![Alt text](https://assets.leetcode.com/uploads/2020/04/02/test_sample_2.png)


Input: root = [3,3,null,4,2]


Output: 3


Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.


#### Example 3.


Input: root = [1]


Output: 1


Explanation: Root is considered as good.