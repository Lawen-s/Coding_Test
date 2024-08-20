"""
https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
24-08-20 - O
24-08-15 - O
"""

"""
24-08-20 - O
"""
class Solution(object):
    def mergeAlternately(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: str
        """
        maxNum = max(len(word1),len(word2))
        result =''
        for i in range(0,maxNum):
            str1Idx = word1[i] if len(word1)>i else ''
            str2Idx = word2[i] if len(word2)>i else ''
            result+=str1Idx+str2Idx
        return result

"""
24-08-15 - O
"""
class Solution(object):
    def mergeAlternately(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: str
        """
        result = ""
        
        for i in range(0,max(len(word1),len(word2))):
          word1Str = word1[i] if i < len(word1) else ''
          word2Str = word2[i] if i < len(word2) else ''
          result += word1Str+word2Str

        return result