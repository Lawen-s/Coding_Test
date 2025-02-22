# shift + enter를 입력하면 한줄 실행. F5를 누르면 전체 실행

class Solution(object):
    def is_similar_nickname(self,str1, str2, memo=None):
        if memo is None:
            memo = {}    
    
        key = (str1, str2)
        if key in memo:
            return memo[key]
    
        # 길이 차이가 2보다 크면 절대 같아질 수 없음
        if abs(len(str1) - len(str2)) > 2:
            memo[key] = False
            return False
    
        # 두 문자열이 같으면 유사함
        if str1 == str2:
            memo[key] = True
            return True
    
        # 한 문자 제거로 같아지는 경우 체크
        if abs(len(str1) - len(str2)) == 1:
            longer, shorter = (str1, str2) if len(str1) > len(str2) else (str2, str1)
            for i in range(len(longer)):
                if longer[:i] + longer[i+1:] == shorter:
                    memo[key] = True
                    return True
    
        # 두 문자 제거로 같아지는 경우 체크
        for i in range(len(str1)):
            str1_removed = str1[:i] + str1[i+1:]
            # 첫 번째 문자 제거 후 한 문자 더 제거
            for j in range(len(str1_removed)):
                if str1_removed[:j] + str1_removed[j+1:] == str2:
                    memo[key] = True
                    return True
    
        for i in range(len(str2)):
            str2_removed = str2[:i] + str2[i+1:]
            # 첫 번째 문자 제거 후 한 문자 더 제거
            for j in range(len(str2_removed)):
                if str2_removed[:j] + str2_removed[j+1:] == str1:
                    memo[key] = True
                    return True
    
        # 각각 한 문자씩 제거해서 같아지는 경우 체크
        for i in range(len(str1)):
            str1_removed = str1[:i] + str1[i+1:]
            for j in range(len(str2)):
                str2_removed = str2[:j] + str2[j+1:]
                if str1_removed == str2_removed:
                    memo[key] = True
                    return True
    
        memo[key] = False
        return False

    def is_similar_email(self,email1, email2):
        account1, server1 = email1.split('@')
        account2, server2 = email2.split('@')
    
        # 계정이름이 완전히 같으면 서버와 관계없이 유사
        if account1 == account2:
            return True
    
        # 서버가 다르면 계정이름이 완전히 같아야만 유사
        if server1 != server2:
            return False
    
        # 한 문자를 제거해서 같아지는지 확인
        if len(account1) == len(account2) + 1:
            for i in range(len(account1)):
                if account1[:i] + account1[i+1:] == account2:
                    return True
        elif len(account2) == len(account1) + 1:
            for i in range(len(account2)):
                if account2[:i] + account2[i+1:] == account1:
                    return True
    
        # 특정 문자를 모두 제거했을 때 같아지는지 확인
        for char in set(account1 + account2):
            if account1.replace(char, '') == account2.replace(char, ''):
                return True
    
        return False

    def count_unique_users(self, emails, nicknames):
        n = len(emails)
        groups = [-1] * n
        group_count = 0
    
        # 첫 번째 패스: 초기 그룹 할당
        for i in range(n):
            if groups[i] == -1:
                groups[i] = group_count
                for j in range(i + 1, n):
                    if groups[j] == -1 and \
                       self.is_similar_nickname(nicknames[i], nicknames[j]) and \
                       self.is_similar_email(emails[i], emails[j]):
                        groups[j] = group_count
                group_count += 1
    
        # 두 번째 패스: 그룹 병합
        changed = True
        while changed:
            changed = False
            for i in range(n):
                for j in range(n):
                    if i != j and groups[i] != groups[j]:
                        if self.is_similar_nickname(nicknames[i], nicknames[j]) and \
                        self.is_similar_email(emails[i], emails[j]):
                            old_group = max(groups[i], groups[j])
                            new_group = min(groups[i], groups[j])
                            # 모든 old_group을 new_group으로 변경
                            for k in range(n):
                                if groups[k] == old_group:
                                    groups[k] = new_group
                                    changed = True
    
        # 그룹 번호 재할당
        unique_groups = sorted(set(groups))
        group_mapping = {g: i for i, g in enumerate(unique_groups)}
        groups = [group_mapping[g] for g in groups]
    
        # 결과 출력
        final_group_count = len(set(groups))
        for g in range(final_group_count):
            print(f"\n그룹 {g + 1}:")
            for i in range(n):
                if groups[i] == g:
                    print(f"닉네임: {nicknames[i]}")
                    print(f"이메일: {emails[i]}")
    
        return final_group_count

    def test(self, arr):
        print(arr)
        return 
    
    def mergeAlternately(self,str1,str2):
        maxNum = max(len(str1),len(str2))
        result =''
        for i in range(0,maxNum):
            str1Idx = str1[i] if len(str1)>i else ''
            str2Idx = str2[i] if len(str2)>i else ''
            result+=str1Idx+str2Idx
        return result

# 테스트
emails = ["687ufq687@aaa.xx.yyy", "87ufq687@aaa.xx.yyy"]


nicknames = ["99police", "99poli44"] 
# emails = ["687ufq687@aaa.xx.yyy", "587ufq687@aaa.xx.yyy"]

# nicknames = ["99polico", "99policd"]
# emails = [
#     "superman5@abcd.com",
#     "batman432@korea.co.kr",
#     "superman@abcd.com",
#     "supertman5@abcd.com",
#     "superman@erty.net",
#     "batman42@korea.co.kr",
#     "batman432@usa.com"
# ]

# nicknames = [
#     "imhero111",
#     "moneyman",
#     "hero111",
#     "imher1111",
#     "hro111",
#     "mmoneyman",
#     "moneymannnn"
# ]

# result = count_unique_users(emails, nicknames)
# print(f"\n서로 다른 사용자 그룹의 수: {result}")

sol = Solution()
print(sol.count_unique_users(emails, nicknames))
# print(sol.mergeAlternately("abc", "pqr"))
# print(sol.mergeAlternately("abcd", "pq"))
# print(sol.gcdOfStrings("ABCABC", "ABC"))
# print(sol.gcdOfStrings("ABABAB", "ABAB"))
# print(sol.gcdOfStrings("ABCDEF", "ABC"))
# print(sol.gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"))