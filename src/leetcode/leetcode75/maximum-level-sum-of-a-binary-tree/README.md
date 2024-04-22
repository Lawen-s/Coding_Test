# 1161.maximum-level-sum-of-a-binary-tree

# 링크
[leetcode.1161](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75)

# 날짜
* 24-04-22 - X
* 23-12-11 - X

# 문제 설명
#### 원문


Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.


Return the smallest level x such that the sum of all the values of nodes at level x is maximal.


# EXAMPLES
#### Example 1.


![Alt text](https://assets.leetcode.com/uploads/2019/05/03/capture.JPG)


Input: root = [1,7,0,7,-8,null,null]


Output: 2


Explanation: 


Level 1 sum = 1.


Level 2 sum = 7 + 0 = 7.


Level 3 sum = 7 + -8 = -1.


So we return the level with the maximum sum which is level 2.


#### Example 2.


Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]


Output: 2


#### Example 3.


Input: root = []


Output: []