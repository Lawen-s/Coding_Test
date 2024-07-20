/**
 * https://leetcode.com/problems/koko-eating-bananas/submissions/1123469317/?envType=study-plan-v2&envId=leetcode-75
 * 24-07-20 - O 
 * 24-07-16 - X
 * 24-07-14 - O
 * 24-07-11 - O
 * 24-07-07 - O
 * 23-12-19 - X
 */

/** 
 * 24-07-20 - O 
 */ 
var minEatingSpeed = function(piles, h) {
    let min = 1;
    let max = Math.max(...piles);
    let arr = [];
    while(min<=max){
        let mid = Math.floor((min+max)/2);
        let count = 0;
        for(let i=0;i<piles.length;i++){
            count+=Math.ceil(piles[i]/mid);
        }
        if(count>h){
            min=mid+1;
        }else{
            max=mid-1;
            arr.push(mid);
        }
    }
    return Math.min(...arr);
};

/**
 * 24-07-16 - X
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let start = 1;
    let end = Math.max(...piles);
    let result=[];
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        let count = 0;
        for(let i=0;i<piles.length;i++){
            count+=Math.ceil((piles[i]/mid));
        }
        if(count<=h){
            result.push(mid);
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return Math.min(...result);
};

/**
 * 24-07-14 - O
 * @param {*} piles 
 * @param {*} h 
 * @returns 
 */
var minEatingSpeed = function(piles, h) {
    let min = 1;
    let max = Math.max(...piles);
    let arr = [];
    while(min<=max){
        let mid = Math.floor((min+max)/2);
        let count = 0;
        for(let i=0;i<piles.length;i++){
            if(piles[i]>mid){
                count+=Math.ceil(piles[i]/mid);
            }else{
                count++;
            }
        }
        if(count<=h){
            arr.push(mid);
            max=mid-1;
        }else{
            min=mid+1;
        }
    }
    return Math.min(...arr);
};

/**
 * 24-07-11 - O
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let min = 1;
    let max = Math.max(...piles);
    let arr = [];
    while(min<=max){
        let mid = Math.floor((max+min)/2);
        let sum = 0;
        for(let i=0;i<piles.length;i++){
            sum+=Math.ceil((piles[i]/mid))
        }
        if(sum<=h){
            max=mid-1;
            arr.push(mid);
        }else{
            min=mid+1;
        }
        
    }
    return Math.min(...arr);
};



/**
 * 24-07-07 - O - 블로그에서 힌트를 얻고 해결
 * 블로그 - https://velog.io/@zerone/LC-875.-Koko-Eating-Bananas
 */
var minEatingSpeed = function(piles, h) {
    let maxPile = Math.max(...piles);
    let minPile = 1;
    let minPileArr=[];
    while(minPile<=maxPile){
        let midPile = Math.floor((maxPile+minPile)/2);
       let sumEatingInHour = piles.reduce((acc,cur)=>acc+Math.ceil(cur/midPile),0);
       if(sumEatingInHour<=h){
           maxPile=midPile-1;
           minPileArr.push(midPile);
       }else{
           minPile=midPile+1;
       }
    }
    return Math.min(...minPileArr)
};


/**
 * 23-12-19 - X
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