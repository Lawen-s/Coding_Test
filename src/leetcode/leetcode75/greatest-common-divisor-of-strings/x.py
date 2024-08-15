"""
https://leetcode.com/problems/greatest-common-divisor-of-strings/submissions/1356338809/?envType=study-plan-v2&envId=leetcode-75
24-08-15 - X
"""

"""
24-08-15 - X
"""
class Solution(object):
    def gcdOfStrings(self, str1, str2):
        if str1 + str2 != str2 + str1:
            return ""
        if len(str1) == len(str2):
            return str1
        if len(str1) > len(str2):
            return self.gcdOfStrings(str1[len(str2):], str2)
        return self.gcdOfStrings(str1, str2[len(str1):])