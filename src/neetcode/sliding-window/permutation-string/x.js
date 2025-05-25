// 풀이를 한번 확인 후 비슷한 방식으로 해결
var test = (s1, s2) => {
  if (s1.length > s2.length) {
    return false;
  }
  let checkS1 = s1.split("").sort().join("");
  let checkStr = "";
  for (let i = 0; i < s2.length; i++) {
    if (checkStr.length < s1.length) {
      checkStr += s2[i];
    } else {
      let newStr = checkStr.split("").sort().join("");
      console.log({ checkStr, checkS1 });
      if (newStr === checkS1) {
        return true;
      } else {
        checkStr = checkStr.slice(1, checkS1.length);
        checkStr += s2[i];
      }
    }
  }
  return checkS1 === checkStr.split("").sort().join("");
};

// 풀이 확인
class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    // s1은 s2보다 클 수 없음
    if (s1.length > s2.length) {
      return false;
    }
    // s1 윈도우에 나오는 알파벳을 카운팅하기 위한 변수
    let s1Count = new Array(26).fill(0);
    // s2 윈도우에 나오는 알파벳을 count
    let s2Count = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
      // s1Count에는 s1의 문자 빈도를 저장
      s1Count[s1.charCodeAt(i) - 97]++;
      // s2Count에는 s2에서 처음 s1.length 길이의 문자열에 대한 문자 빈도를 저장
      s2Count[s2.charCodeAt(i) - 97]++;
    }
    // s1Count와 s2Count에서 같은 값(문자 개수)을 가진 인덱스 개수를 추적
    let matches = 0;
    for (let i = 0; i < 26; i++) {
      // 같은 문자가 있었던 경우만 matchs++
      // 만약 matches === 26이면 두 개의 배열이 완전히 동일
      if (s1Count[i] === s2Count[i]) {
        matches++;
      }
    }

    let l = 0;
    // 윈도우를 s1의 길이로 지정후 진행
    // 위에서 이미 윈도우의 길이로 s2Count에 count를 진행
    for (let r = s1.length; r < s2.length; r++) {
      if (matches === 26) {
        return true;
      }
      // s2에서 윈도우를 r로 이동한 다음 문자를 확인
      let index = s2.charCodeAt(r) - 97;
      // s2(r) 문자를 +1
      s2Count[index]++;
      // s2(r) 값이 s1(r)과 같다면 match +1
      if (s1Count[index] === s2Count[index]) {
        matches++;
        // s2(r) 값이 s1(r)과 다르다면 match -1
      } else if (s1Count[index] + 1 === s2Count[index]) {
        matches--;
      }
      // s2에서 l 윈도우 이동 전 문자를 확인(윈도우는 고정 크기)
      index = s2.charCodeAt(l) - 97;
      // s2(l) 문자를 -1
      s2Count[index]--;
      // s2(l) 값이 s1(l)과 같다면 match +1
      if (s1Count[index] === s2Count[index]) {
        matches++;
        // s2(l) 값이 s1(l)과 다르다면 match -1
      } else if (s1Count[index] - 1 === s2Count[index]) {
        matches--;
      }
      // l 윈도우 이동
      l++;
    }
    return matches === 26;
  }
}
