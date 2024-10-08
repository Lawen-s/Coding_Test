/**
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/submissions/1140467645/?envType=study-plan-v2&envId=leetcode-75
 * 24-08-12 - O
 * 24-08-10 - O
 * 24-08-08 - O
 * 24-08-07 - X
 * 24-01-08 - X
 */

/**
 * 24-08-12 - O
 */
var findMinArrowShots = function(points) {
  points.sort((a,b)=>a[1]-b[1]);
  let count = 1;
  let beforeArrow = points[0];
  console.log({points})
  for(let i=1;i<points.length;i++){
      if(beforeArrow[1]<points[i][0]){
          count++;
          beforeArrow=points[i];
      }
  }
  return count;
};

/**
 * 24-08-10 - O
 */
var findMinArrowShots = function(points) {
  points.sort((a,b)=>a[1]-b[1]);
  let count =1;
  let burst = points[0];
  for(let i=1;i<points.length;i++){
      if(burst[1]>points[i][1]){
          count++
      }
      if(burst[1]<points[i][0]){
          burst=points[i];
          count++;
      }
  }
  return count;
};


/**
 * 24-08-08 - O
 */
var findMinArrowShots = function(points) {
  points.sort((a,b)=>a[1]-b[1]);
  let count =1;
  let before = points[0];
  for(let i=1;i<points.length;i++){
      if(before[1]>=points[i][0]){
      }else{
          count++;
          before=points[i];
      }
  }
  return count;
};

/**
 * 24-08-07 - X
 */
var findMinArrowShots = function(points) {
  points.sort((a,b)=>a[1]-b[1])
  let count = 1;
  let before = points[0];
  for(let i=0;i<points.length;i++){
      if(before[1]<points[i][0]){
          count++;
          before = points[i];
  }
}
  return count
};

/**
 * 풀이를 보고 이해(겹치는 숫자를 count하는 문제)
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort((a, b) => a[0] - b[0]);
  let prev = null, count = 0;
  for(let [start, end] of points) {
      if(prev == null || prev < start) {
          count++;
          prev = end;
      } else prev = Math.min(prev, end);
  }
  return count;
};

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))
// console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]))

/**
 * 효율이 좋은 코드
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {

  points.sort((a,b)=> a[1]-b[1]);
  let arrows = 0;
  let end = -Infinity;

  for(let i = 0; i<points.length; i++){
      if(end<points[i][0]){
          end = points[i][1];
          arrows++;
      }
  }

  return arrows; 
};