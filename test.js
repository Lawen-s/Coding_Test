// ctrl + opt + n 실행
var test = (s) => {
  // 1. 문자열에서 띄어쓰기 된부분을 제거
  // 2. 첫번째 숫자와 마지막숫자를 변수로 지정
  // 3. 비교하면서 가운데로 숫자 이동
  // 4. 일치하지 않는 경우 false
  const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi; // 특수문자 제거 규칙
  const removeEmptySpace = s.replace(/\s/g, ""); // 공백제거 정규표현식
  const removeSomeStr = removeEmptySpace.replace(reg, "").toLowerCase(); // 특수문자제거 및 소문자로 변경
  console.log({ removeEmptySpace });
  console.log({ removeSomeStr });
  let start = 0;
  let end = removeSomeStr.length - 1;
  while (start < end) {
    if (removeSomeStr[start] !== removeSomeStr[end]) {
      console.log(removeSomeStr[end]);
      console.log(removeSomeStr[start]);
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};

console.log(test("Was it a car or a cat I saw?"));
// console.log(test((heights = [2, 1, 5, 6, 2, 3])));
// console.log(test([7, 1, 7, 2, 2, 4]));
// console.log(test([1, 3, 7]));
// console.log(leafSimilar([1, 2, 3], [1, 3, 2]));

// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(mergeAlternately("abc","pqr"))
// console.log(gcdOfStrings("ABCABC", "ABC"))
// console.log(gcdOfStrings("ABABAB", "ABAB"))
// console.log(gcdOfStrings("ABCDEF", "ABC"))
// console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"))

// console.log(kidsWithCandies([2,3,5,1,3], 3))

// console.log(canPlaceFlowers([1,0,0,0,1], 1))
// console.log(canPlaceFlowers([0,0,1,0,0], 1))
// console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2))
// console.log(canPlaceFlowers([1,0,1,0,1,0,1], 1))
// console.log(canPlaceFlowers([1,0,0,0,1], 2))
// console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2))
// console.log(canPlaceFlowers([0,0,1,0,0], 1))

// console.log(reverseVowels("hello"));
// console.log(reverseVowels("leetcode"))

// console.log(reverseWords("the sky is blue"))
// console.log(reverseWords("  hello world  "))

// console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// console.log(productExceptSelf([0,0]))

// console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
// console.log(increasingTriplet([1, 6, 2, 5, 1]));

// console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
// console.log(compress(["a"]));
