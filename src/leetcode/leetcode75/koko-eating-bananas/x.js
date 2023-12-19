/**
 * https://leetcode.com/problems/koko-eating-bananas/submissions/1123469317/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 효율 좋은 코드
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  const canFinish = (speed) => {
      let hours = 0;
      for (let pile of piles) {
          hours += Math.ceil(pile / speed);
      }
      return hours <= h;
  };

  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (canFinish(mid)) {
          right = mid;
      } else {
          left = mid + 1;
      }
  }

  return left;
};


/**
 * 풀이를 보고 이해
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  /*The range of bananas that Koko can eat is k = 1 to Max(piles)*/
  let startk = 1;
  let endk = Math.max(...piles);
  
  while(startk <= endk){
      let midk = Math.floor(startk + (endk - startk)/2);
      /*midk are the count of bananas that koko decide to eat. 
      So how many hours she will take to finish the piles?*/
      let hrs = 0;
      for(let pile of piles){
          /*pile is the num of bananas in piles*/
          hrs += Math.ceil(pile/midk);
      }
      if(hrs > h){
          /*Now if hrs > h she will not be to finish the pile so we have 
          to increase the bananas by moving start.*/
          startk = midk + 1;
      }else{
          /*If hrs <= h she will be eating too fast so we can reduce the bananas 
          so she eats slowly. So decrement end.*/
          endk = midk - 1;
      }
  }
  return startk;
};