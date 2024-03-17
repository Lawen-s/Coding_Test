# 2390.Removing-Stars-From-A-String

# 링크
[leetcode.2390](https://leetcode.com/problems/removing-stars-from-a-string/?envType=study-plan-v2&envId=leetcode-75)

# 날짜
* 24-03-17 - O
* 23-11-28 - O

# 문제 설명
#### 원문


You are given a string s, which contains stars *.


In one operation, you can:


Choose a star in s.


Remove the closest non-star character to its left, as well as remove the star itself.


Return the string after all stars have been removed.


Note:


The input will be generated such that the operation is always possible.


It can be shown that the resulting string will always be unique.
***

# EXAMPLES
#### Example 1.


Input: s = "leet**cod*e"


Output: "lecoe"


Explanation: Performing the removals from left to right:


- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".


There are no more stars, so we return "lecoe".

#### Example 2.


Input: s = "erase*****"


Output: ""


Explanation: The entire string is removed, so we return an empty string.

