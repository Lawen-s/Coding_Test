# longest-repeating-substring-with-replacement

# 링크

[longest-repeating-substring-with-replacement](https://neetcode.io/problems/longest-repeating-substring-with-replacement)

# 날짜

- 25-05-11 - X
- 25-03-03 - X

# 문제 설명

#### 원문

You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

---

# EXAMPLES

#### Example 1.

Input: s = "XYYX", k = 2

Output: 4

Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

#### Example 2.

Input: s = "AAABABB", k = 1

Output: 5

Explanation: No profitable transactions can be made, thus the max profit is 0.

Constraints:

- 1 <= s.length <= 1000
- 0 <= k <= s.length
