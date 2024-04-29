# 547.Number-Of-Provinces

# 링크
[leetcode.547](https://leetcode.com/problems/number-of-provinces/description/?envType=study-plan-v2&envId=leetcode-75)

# 날짜
* 24-04-29 - 
* 23-12-13 - X


# 문제 설명
#### 원문


There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.


A province is a group of directly or indirectly connected cities and no other cities outside of the group.


You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.


Return the total number of provinces.


# EXAMPLES
#### Example 1.


![Alt text](https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg)


Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]


Output: 2


#### Example 2.


![Alt text](https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg)


Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]


Output: 3