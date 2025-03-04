# minimum-window-with-characters

# 링크

[minimum-window-with-characters](https://neetcode.io/problems/minimum-window-with-characters)

# 날짜

- 25-03-05 - X

# 문제 설명

#### 원문

Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".

You may assume that the correct output is always unique.

---

# EXAMPLES

#### Example 1.

Input: s = "OUZODYXAZV", t = "XYZ"

Output: "YXAZ"

Explanation: "YXAZ" is the shortest substring that includes "X", "Y", and "Z" from string t.

#### Example 2.

Input: s = "xyz", t = "xyz"

Output: "xyz"

#### Example 3.

Input: s = "x", t = "xy"

Output: ""

Constraints:

- 1 <= s.length <= 1000
- 1 <= t.length <= 1000
- s and t consist of uppercase and lowercase English letters.
