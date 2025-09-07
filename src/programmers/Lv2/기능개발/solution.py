import math
class Solution(object):
    @staticmethod
    def solution(progresses, speeds):
        if len(progresses)!=len(speeds):
            return []
        answer = []
        maxNum = 0
        count = 0
        for i in range(len(progresses)):
            rest_num = math.ceil((100-progresses[i])/speeds[i])
            if maxNum>=rest_num:
                count+=1
            else:
                if maxNum == 0:
                    count+=1
                else:
                    answer.append(count)
                    count = 1
            maxNum = max(maxNum,rest_num)
        answer.append(count)
        return answer