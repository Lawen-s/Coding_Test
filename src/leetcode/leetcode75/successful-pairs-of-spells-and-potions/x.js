/**
 * https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description/?envType=study-plan-v2&envId=leetcode-75
 */


/**
 * 
 * 타임 아웃 발생
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  let arr = []
    for (var i = 0; i < spells.length; i++) {
      let count = 0;
      for(var j = 0; j <potions.length; j++) {
        if(spells[i]*potions[j]>=success){
          count ++;
        }
    }
    arr.push(count)
  }
  return arr
};


/**
 * 풀이를 보고 이해 
 * potions를 오름차순으로 정렬하고 절반으로 나누는 방식으로 진행
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  const pairs = [];
  potions.sort((a, b) => a - b);
  const spellsLength = spells.length;
  const potionsLength = potions.length;

  for (let i = 0; i < spellsLength; i++) {
      let count = 0;
      // binary search
      let left = 0;
      let right = potionsLength - 1;
      while (left <= right) {
          // const mid = Math.floor((left + right) / 2);
          const mid = (left + right) >> 1;
          if (spells[i] * potions[mid] >= success) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }
      count = potionsLength - left;
      pairs.push(count);
  }
  return pairs;
};


console.log(successfulPairs(spells = [5,1,3], potions = [1,2,3,4,5], success = 7))
console.log(successfulPairs(spells = [3,1,2], potions = [8,5,8], success = 16))