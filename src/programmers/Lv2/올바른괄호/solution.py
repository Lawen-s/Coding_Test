class Solution(object):
    @staticmethod
    def solution(s):
        test = list(s)
        last_str=test[0]
        before = [last_str]
        for i in range(1,len(test)):
            c = test[i]
            if last_str== '(' and c==')':
                before.pop()
                last_str=  before[-1] if len(before)>0 else ''
            else:
                last_str=c
                before.append(c)
        return len(before) == 0
