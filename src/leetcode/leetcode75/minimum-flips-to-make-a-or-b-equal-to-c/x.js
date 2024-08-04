/**
 * https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/?envType=study-plan-v2&envId=leetcode-75
 * 24-08-04 - O
 * 24-08-03 - O
 * 24-08-01 - O
 * 23-01-04 - X
 */

/**
 * 24-08-04 - O
 */
var minFlips = function(a, b, c) {
    let bitsAToArr = a.toString(2).split('')
    let bitsBToArr = b.toString(2).split('')
    let bitsCToArr = c.toString(2).split('')
    let maxLength = Math.max(bitsAToArr.length,bitsBToArr.length,bitsCToArr.length);
    function filledZero(bitsArr){
        let newArr =[];
        for(let i=0;i<maxLength;i++){
            if(bitsArr[i]){
                newArr.push(parseInt(bitsArr[i]));
            }else{
                newArr.unshift(0);
            }
        }
        return newArr;
    }
    bitsAToArr = filledZero(bitsAToArr);
    bitsBToArr = filledZero(bitsBToArr);
    bitsCToArr = filledZero(bitsCToArr);
    let count =0;
    for(let i=0;i<maxLength;i++){
        if(bitsAToArr[i]+bitsBToArr[i]!==bitsCToArr[i]){
            count+=Math.abs((bitsAToArr[i]+bitsBToArr[i])-bitsCToArr[i]);
        }
        if((bitsAToArr[i]+bitsBToArr[i]===2)&&bitsCToArr[i]===1){
            count--;
        }
    }
    return count;
};

/**
 * 24-08-03 - O
 */
var minFlips = function(a, b, c) {
    if(a===c&&b===c) return 0;
    let bitsStringA = a.toString(2).split('');
    let bitsStringB = b.toString(2).split('');
    let bitsStringC = c.toString(2).split('');
    let maxLength = Math.max(bitsStringA.length,bitsStringB.length,bitsStringC.length);
    function changeTypeAndShiftZero(bitsArr){
        let newArr=[];
        for(let i=0;i<maxLength;i++){
            if(bitsArr[i]){
                newArr.push(parseInt(bitsArr[i]))
            }else{
                newArr.unshift(0);
            }
        }        
        return newArr;
    }
    bitsStringA = changeTypeAndShiftZero(bitsStringA);
    bitsStringB = changeTypeAndShiftZero(bitsStringB);
    bitsStringC = changeTypeAndShiftZero(bitsStringC);
    let count =0;
    for(let i=0;i<maxLength;i++){
        if(bitsStringA[i]+bitsStringB[i]!==bitsStringC[i]){
            count+=Math.abs((bitsStringA[i]+bitsStringB[i])-bitsStringC[i])
        }
        if(bitsStringA[i]+bitsStringB[i]===2&&bitsStringC[i]===1){
            count--;
        }
    }
    return count;
};

/**
 * 24-08-01 - O
 */
var minFlips = function(a, b, c) {
    if(a===c&&b===c){
        return 0
    }
    let bitA = a.toString(2).split('')
    let bitB = b.toString(2).split('')
    let bitC = c.toString(2).split('')
    let maxLength = Math.max(bitA.length,bitB.length,bitC.length);
    function filledZero(arr){
        return new Array(maxLength-arr.length).fill('0').concat(arr);
        }
        bitA = filledZero(bitA);
        bitB = filledZero(bitB);
        bitC = filledZero(bitC);
        let count =0;
    for(let i=0;i<maxLength;i++){
        let sumAB = parseInt(bitA[i])+parseInt(bitB[i]);
        if(sumAB!==parseInt(bitC[i])){
            if(sumAB-parseInt(bitC[i])===1&&parseInt(bitC[i])===1){
                count--;
            }
            count+=sumAB>=parseInt(bitC[i])?sumAB-parseInt(bitC[i]):parseInt(bitC[i])-sumAB;
        }
        
    }
    return count;
};

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