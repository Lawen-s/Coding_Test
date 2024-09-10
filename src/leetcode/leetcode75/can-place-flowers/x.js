/**
 * 문제: https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75
 * 24-09-10 - O
 * 24-09-09 - O
 * 24-08-27 - X
 * 24-01-31 - X
 */

/**
 * 24-09-10 - O 
 */
var canPlaceFlowers = function(flowerbed, n) {
  for(let i=0;i<flowerbed.length;i++){
      if(n===0){
          return true;
      }
      let pre = i-1<0?0:flowerbed[i-1];
      let mid = flowerbed[i];
      let next = i+1>=flowerbed.length?0:flowerbed[i+1];
      if(pre+mid+next===0){
          flowerbed[i]=1;
          n--;
      }
  }   
  return n===0?true:false;
};

/**
 * 24-09-09 - O
 */
var canPlaceFlowers = function(flowerbed, n) {
  if(n===0){
          return true;
      }

  for(let i =0;i<flowerbed.length;i++){
      let pre = i-1<0?0:flowerbed[i-1];
      let next = i+1>=flowerbed.length?0:flowerbed[i+1];
      if(pre+flowerbed[i]+next===0){
          flowerbed[i]=1;
          n--;
      }
      if(n===0){
          return true;
      }
  }
  return n===0?true:false;
};

/**
 * 24-08-27 - X 
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  let pre = -1;
  let next = 1;

  for (let i = 0; i < flowerbed.length; i++, pre++, next++) {
      if ((getValue(flowerbed, pre) + getValue(flowerbed, i) + getValue(flowerbed, next)) == 0) {
          flowerbed[i] = 1;
          count++;
      }
  }

  return count >= n;
};

var getValue = function(flowerbed, i) {
  if (i < 0 || i >= flowerbed.length) {
      return 0;
  }
  return flowerbed[i];
}

/**
 * 풀이 확인 (24.01.31)
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length && n !== 0; i++) {
      if (
        flowerbed[i] === 0 &&
        flowerbed[i - 1] !== 1 &&
        flowerbed[i + 1] !== 1
      ) {
        n--;
        i++;
      }
    }
    return n === 0;
};


/**
 * 24.01.31
 * 내가 푼 방법(틀림)
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let before =flowerbed[0] ;
    let cur = flowerbed[1];
    if(n===0||(before===0&&n===1)){
        return true
    }
    for(let i =2;i<flowerbed.length;i++){
        if(i===2&&before ===0&&cur===0){
          n-=1
          flowerbed[i-2]=1;
        }
        if(i===flowerbed.length-1&&flowerbed[i]===0&&cur===0){
            n-=1
            flowerbed[i]=1
        }
        if(before ===0&&cur===0&&flowerbed[i]===0){
          n-=1
          flowerbed[i-1]=1;
        }
        if(n===0){
          return true
        }
        before=flowerbed[i-1]
        cur=flowerbed[i]
    }
    return false
  
  };


/**
 * https://leetcode.com/problems/can-place-flowers/?source=submission-noac
 */

var canPlaceFlowers = function(flowerbed, n) {
  if(n ==0)return true;
  let len = flowerbed.length;
  let plantCnt = 0;

  let prev = 0;
  for (let i = 0; i < len; i++) {
      let next = i == len-1? 0 : flowerbed[i+1];
      if(prev == 0 && next ==0 && flowerbed[i] ==0){
          flowerbed[i] = 1;
          if(++plantCnt == n){ 
              return true;
          }
      }
      prev = flowerbed[i];
  }
  return false;
};



/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// var canPlaceFlowers = function (flowerbed, n) {
//   let counter = 0
  
  
  
//   for (let i = 0; i < flowerbed.length; i++) {
//       let prev = flowerbed[i - 1]
//       let current = flowerbed[i]
//       let next = flowerbed[i + 1]
//       if (current !== 1) {
//           if (prev === undefined && next === 0) {
//               flowerbed[i] = 1
//               counter++
//           }
//           else if (prev === 0 && next === undefined) {
//               flowerbed[i] = 1
//               counter++
//           }
//           else if (prev === 0 && next === 0) {
//               flowerbed[i] = 1
//               counter++
//           }
//           else if (prev === undefined && next === undefined) {
//               flowerbed[i] = 1
//               counter++
//           }
//       }

//   }
//   return counter >= n
// };