// 풀이 확인
class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    // 1. t가 s보다 길수는 없다.(t는 s의 부분문자열)
    if (s.length < t.length) {
      return "";
    }
    // t에 있는 문자를 확인
    let countT = {};
    // 계속 이동하기 위한 window를 생성
    let window = {};
    // t의 문자를 count하여 countT에 저장
    for (let c of t) {
      countT[c] = (countT[c] || 0) + 1;
    }
    // have는 윈도우가 움직이면 countT에 있는 키와 같은지 count를 하기 위한 변수
    // need는 countT의 키가 같아지도록 기준을 설정
    let have = 0,
      need = Object.keys(countT).length;
    // res는 window의 index의 l, r를 지정하기위한 배열
    let res = [-1, -1];
    // resLen은 초기 무한대로 설정(have가 need랑 같고, countT의 키와 window의 키의 값이 같은 경우 resLen에 등록)
    let resLen = Infinity;
    // 왼쪽 창문 지정
    let l = 0;

    // 오른쪽 창문 이동
    for (let r = 0; r < s.length; r++) {
      let c = s[r];
      // window에 s[r](c)문자를 저장
      window[c] = (window[c] || 0) + 1;
      // countT의 키가 c인 값이 있으며, window[c] === countT[c]가 같은경우 have +1
      if (countT[c] && window[c] === countT[c]) {
        have++;
      }
      // have랑 need가 같으면
      while (have === need) {
        // 오 - 왼 + 1 = 문자 길이를 비교
        if (r - l + 1 < resLen) {
          resLen = r - l + 1;
          res = [l, r];
        }
        // 창문을 이동할 예정으로 -1
        window[s[l]]--;
        // -1한 s[l]을 기준으로 확인, countT[s[l]]가 있으며,
        // window[s[l]]에 있던것을 -1 했기때문에 countT[s[l]]보다 작다면 have -1을 해줘야한다.
        if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
          have--;
        }
        // 왼쪽 창문 이동 +1
        l++;
      }
    }

    return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
  }
}
