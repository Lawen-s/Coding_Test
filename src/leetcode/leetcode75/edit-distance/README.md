# 72.Edit-Distance

# 링크

[leetcode.72](https://leetcode.com/problems/edit-distance/?envType=study-plan-v2&envId=leetcode-75)

# 날짜

* 24-07-31 - O
* 24-07-30 - X
* 24-07-28 - X
* 24-07-25 - X
* 24-01-02 - X

# 문제 설명

#### 원문

Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character

# EXAMPLES

#### Example 1.

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

#### Example 2.

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation:
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
