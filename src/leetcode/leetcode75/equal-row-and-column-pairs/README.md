# 2352.Equal-Row-And-Column-Pairs

# 링크

[leetcode.2352](https://leetcode.com/problems/equal-row-and-column-pairs/description/?envType=study-plan-v2&envId=leetcode-75)

# 날짜

- 24-10-22 - X
- 24-03-17 - X
- 23-11-28 - X

# 문제 설명

#### 원문

Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

# EXAMPLES

#### Example 1.

![Alt text](https://assets.leetcode.com/uploads/2022/06/01/ex1.jpg)

Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:

- (Row 2, Column 1): [2,7,7]

#### Example 2.

![Alt text](https://assets.leetcode.com/uploads/2022/06/01/ex2.jpg)

Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:

- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
