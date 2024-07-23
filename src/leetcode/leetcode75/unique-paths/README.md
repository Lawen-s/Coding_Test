# 62.unique-paths

# 링크
[leetcode.62](https://leetcode.com/problems/unique-paths/?envType=study-plan-v2&envId=leetcode-75)

# 날짜
* 24-07-23 - O
* 24-07-22 - O
* 24-07-21 - X
* 24-01-01 - X

# 문제 설명
#### 원문


There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.



# EXAMPLES
#### Example 1.

![Alt text](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

Input: m = 3, n = 7
Output: 28


#### Example 2.


Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down