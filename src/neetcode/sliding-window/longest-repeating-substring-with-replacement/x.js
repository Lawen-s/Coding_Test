// 풀이 확인

class Solution {
  characterReplacement(s, k) {
    let setS = new Set(s);
    let result = 0;
    for (let char of setS) {
      let l = 0,
        count = 0;
      for (let r = 0; r < s.length; r++) {
        if (char === s[r]) {
          count++;
        }
        while (r - l + 1 - count > k) {
          if (s[l] === char) {
            count--;
          }
          l++;
        }
        result = Math.max(result, r - l + 1);
      }
    }
    return result;
  }
}

class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let count = new Map();
    let res = 0;

    let l = 0,
      maxf = 0;
    // 왼쪽을 기준으로 설정해서 오른쪽으로 이동하면서 문자를 확인
    for (let r = 0; r < s.length; r++) {
      count.set(s[r], (count.get(s[r]) || 0) + 1);
      // Map().set(key, value)로 key에 문자를 넣고, value를 +1 함
      maxf = Math.max(maxf, count.get(s[r]));
      // 현재까지(왼->오)진행될때 문자가 가질수있는 최대값을 maxf에 저장
      while (r - l + 1 - maxf > k) {
        // while문에서 오-왼+1 - 해당 문자 개수 가 k 보다 크면 왼쪽 문자의 값을 -1해준다.
        // 오-왼+1을 하는 이유는 0부터 시작해서 +1로 맞춰주려고 하기 위함
        // 왼쪽을 +1로 이동한다.
        count.set(s[l], count.get(s[l]) - 1);
        l++;
      }
      // 오-왼+1을 하는 경우 길이가 나오게 된다.
      res = Math.max(res, r - l + 1);
    }

    return res;
  }
}
