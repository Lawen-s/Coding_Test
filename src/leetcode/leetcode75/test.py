# shift + enter를 입력하면 한줄 실행. F5를 누르면 전체 실행

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
        

sol = Solution()
print(sol.mergeAlternately("abc", "pqr"))