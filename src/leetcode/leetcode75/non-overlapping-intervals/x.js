/**
 * https://leetcode.com/problems/non-overlapping-intervals/submissions/1139177987/?envType=study-plan-v2&envId=leetcode-75
 * 24-08-08 - O
 * 24-08-07 - O
 * 24-08-06 - X
 * 24-01-07 - X
 */

/**
 * 24-08-08 - O
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a,b)=>a[1]-b[1]);
  let count = 0;
  let before = intervals[0];
  for(let i =1;i<intervals.length;i++){
      if(before[1]>intervals[i][0]){
          count++;
      }else{
          before = intervals[i];
      }
  }
  return count;
};


/**
 * 24-08-07 - O
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a,b)=> a[1]-b[1]);
  let count = 0;
  let before = intervals[0];
  for(let i=1;i<intervals.length;i++){
      if(before[1]>intervals[i][0]){
          count++;
      }else{
          before=intervals[i];
      }
  }
  return count;
};

/**
 * 24-08-06 - X 
 */
var eraseOverlapIntervals = function(intervals) {
  let count=0;
  intervals.sort((a,b)=>(a[1]-b[1]))
  let before = intervals[0];
  for(let i=1;i<intervals.length;i++){
      let now = intervals[i];
      if(before[1]>now[0]){
          count++;
      }else{
          before = intervals[i]
      }
  }
  return count;
};

/**
 * 내가 푼 방식(통과X)
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  console.log(intervals)
  let count = 0;
    for(let i=0; i<intervals.length; i++) {
      let prev = intervals[i]
      for(let j =intervals[i].length-1;j<intervals[i].length; j++) {
        if(intervals[i+1]===undefined){
          return count
        }
        if(prev[j]!==intervals[i+1][0]){
          count ++;
        }
      }
    }
};

/**
 * 풀이를 보고 이해함
 * @param intervals 
 * @returns 
 */
var eraseOverlapIntervals = function(intervals) {
	// sort by earliest finish time
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0], remove = 0;
    
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < prev[1]) remove++;
        else prev = intervals[i];
    }
    return remove;
};

// console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))
// console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]))
// console.log(eraseOverlapIntervals([[1,2],[2,3]]))
console.log(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]]))