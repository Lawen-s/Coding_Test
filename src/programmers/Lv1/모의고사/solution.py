class Solution(object):
    @staticmethod
    def solution(answers):
        num_1 = [1, 2, 3, 4, 5]
        num_2 = [2, 1, 2, 3, 2, 4, 2, 5]
        num_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
        result = []
        score = [0,0,0]
        for i,v in enumerate(answers):
            if v == num_1[i%5]:
                    score[0]+=1
            if v == num_2[i%8]:
                    score[1]+=1
            if v == num_3[i%10]:
                    score[2]+=1
        max_num = max(score)
        if max_num  == score[0]:
            result.append(1)
        if max_num  == score[1]:
            result.append(2)
        if max_num  == score[2]:
            result.append(3)

        return result