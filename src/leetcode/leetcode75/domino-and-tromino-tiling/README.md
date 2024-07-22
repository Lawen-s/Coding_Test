# 790.Domino-And-Tromino-Tiling

# 링크
[leetcode.790](https://leetcode.com/problems/domino-and-tromino-tiling/?envType=study-plan-v2&envId=leetcode-75)

# 날짜
* 24-07-22 - O
* 24-07-21 - X
* 24-07-20 - X
* 23-12-28 - X

# 문제 설명
#### 원문


You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes.
![Alt text](https://assets.leetcode.com/uploads/2021/07/15/lc-domino.jpg)

Given an integer n, return the number of ways to tile an 2 x n board. Since the answer may be very large, return it modulo 109 + 7.

In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.

***

# EXAMPLES
#### Example 1.


![Alt text](https://assets.leetcode.com/uploads/2021/07/15/lc-domino1.jpg)


Input: n = 3
Output: 5
Explanation: The five different ways are show above.


#### Example 2.


Input: n = 1
Output: 1