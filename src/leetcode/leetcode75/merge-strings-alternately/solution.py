"""
https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
24-08-15 - O
"""

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