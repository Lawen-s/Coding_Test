// ctrl + opt + n 실행
var test = (head) => {
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

// console.log(test("XYYX", 2));
// console.log(test("AAABABB", 1));
// console.log(test("abc", "lecabee"));
console.log(test([0, 1, 2, 3]));
// console.log(test(9,[[3,2,6],[5,1,4],[1,7,13]]));

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
