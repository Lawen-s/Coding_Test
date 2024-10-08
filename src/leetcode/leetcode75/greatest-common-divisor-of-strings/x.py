"""
https://leetcode.com/problems/greatest-common-divisor-of-strings/submissions/1356338809/?envType=study-plan-v2&envId=leetcode-75
24-08-20 - X
24-08-15 - X
"""

"""
24-08-20 - X
"""
class Solution(object):
  def gcdOfStrings(self, str1, str2):
        if(str1+str2!=str2+str1):
            return ''
        def gcd(m,n):
            if(n>m):
                m,n=n,m
            if(n==0):
                return m
            if(m%n==0):
                return n
            else:
                return gcd(n,m%n)
        num = gcd(len(str1),len(str2))
        return str1[:num]

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