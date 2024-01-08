/**
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/submissions/1140467645/?envType=study-plan-v2&envId=leetcode-75
 */

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