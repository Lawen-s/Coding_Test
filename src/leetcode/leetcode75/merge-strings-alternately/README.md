# 1768.Merge-Strings-Alternately

# 링크
[leetcode.1768](https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75)

# 날짜(JS, PY)

* 24-08-20 - O , O
* 24-08-15 - O , O
* 24-08-13 - O
* 23-11-12 - O

# 문제 설명
#### 원문


You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.


***

# EXAMPLES
#### Example 1.


Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r



#### Example 2.


Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s


#### Example 3.


Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
