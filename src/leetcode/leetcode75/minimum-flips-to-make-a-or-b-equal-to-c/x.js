/**
 * https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 풀이를 보고 이해함
 * 비트 연산 관련 문제는 아직 이해가 필요함
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
  let minFlip = 0

  while(a || b || c){
      const bitA = a & 1
      const bitB = b & 1
      const bitC = c & 1
      if ((bitA || bitB) !== bitC){
          bitC === 1 ? minFlip += 1 : minFlip += (bitA === 1) + (bitB === 1)
      }
      a >>= 1
      b >>= 1
      c >>= 1
  }
  return minFlip
};

/**
 * 효율은 좋지 않지만 직관적인 코드같음
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
  const ab = a | b
  if (ab === c) return 0

  let aBinary = a.toString(2)
  let bBinary = b.toString(2)
  let abBinary = ab.toString(2)
  let cBinary = c.toString(2)

  const maxLength = Math.max(abBinary.length, cBinary.length)
  aBinary = aBinary.padStart(maxLength, '0')
  bBinary = bBinary.padStart(maxLength, '0')
  abBinary = abBinary.padStart(maxLength, '0')
  cBinary = cBinary.padStart(maxLength, '0')

  let counter = 0
  for (let i = 0; i < maxLength; i++) {
      if (abBinary[i] !== cBinary[i]) {
          if (cBinary[i] === '1') counter++
          else {
              if (aBinary[i] === '1') counter++
              if (bBinary[i] === '1') counter++
          }
      }
  }

  return counter
};

console.log(minFlips(2,6,5))