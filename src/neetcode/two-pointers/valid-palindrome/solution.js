class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    // 1. 문자열에서 띄어쓰기 된부분을 제거
    // 2. 첫번째 숫자와 마지막숫자를 변수로 지정
    // 3. 비교하면서 가운데로 숫자 이동
    // 4. 일치하지 않는 경우 false
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi; // 특수문자 제거 규칙
    const removeEmptySpace = s.replace(/\s/g, ""); // 공백제거 정규표현식
    const removeSomeStr = removeEmptySpace.replace(reg, "").toLowerCase(); // 특수문자제거 및 소문자로 변경
    let start = 0;
    let end = removeSomeStr.length - 1;
    while (start < end) {
      if (removeSomeStr[start] !== removeSomeStr[end]) {
        return false;
      } else {
        start++;
        end--;
      }
    }
    return true;
  }
}
