class Solution(object):
    @staticmethod
    def solution(array, commands):
        result = []
        for arr in commands:
            start = arr[0]-1
            end = arr[1]
            index = arr[2]-1
            new_arr = sorted(array[start:end])
            result.append(new_arr[index])
                
        return result