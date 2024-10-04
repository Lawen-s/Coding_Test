/**
 * https://leetcode.com/problems/container-with-most-water/submissions/1099456924/?envType=study-plan-v2&envId=leetcode-75
 * 24-10-04 - O
 * 24-10-03 - X
 * 24-02-20 - X
 * 23-11-26 - X
 */

/**
 * 24-10-04 - O
 */
var maxArea = function (height) {
  let result = 0;
  let s = 0;
  let e = height.length - 1;
  while (s < e) {
    result = Math.max(result, Math.min(height[s], height[e]) * (e - s));
    if (height[s] < height[e]) {
      s++;
    } else {
      e--;
    }
  }

  return result;
};

/**
 * 24-10-03 - X
 */
var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    maxArea = Math.max(
      maxArea,
      (right - left) * Math.min(height[left], height[right])
    );

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

/**
 * 24-02-20 - X (내가 푼 방식-타임에러 발생)
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i; j < height.length; j++) {
      let small = height[i] > height[j] ? height[j] : height[i];
      let row = small * (j - i);
      area = area >= row ? area : row;
    }
  }
  return area;
};
/**
 * 풀이 참고
 * @param {*} height
 * @returns
 */
var maxArea = function (height) {
  let result = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    let smallestSide = Math.min(height[left], height[right]);
    let area = (right - left) * smallestSide;

    if (area > result) result = area;

    if (height[left] < height[right]) left++;
    else right--;
  }

  return result;
};
/**
 * 내가 푼 방식(timeout 발생)
 * timeout을 없애려면 while 문으로 양끝에서 조회하는 방식으로 가야함
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let maxNum = Math.max(...height);
  console.log(maxNum);
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      if (height[i] > height[j]) {
        let some = i > j ? i - j : j - i;
        let check = some * height[j];
        if (max < check) {
          max = check;
        }
      } else {
        let some = i > j ? i - j : j - i;
        let check = some * height[i];
        if (max < check) {
          max = check;
        }
      }
    }
  }
  return max;
};

/**
 * 검색 후 찾은 답
 * 양측의 끝에서 조회를 하는 방식으로 생각
 * timeout 발생을 하지 않으려면 While문을 사용 권장
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let start = 0;
  let last = height.length - 1;

  while (last - start > 0) {
    const standard =
      height[last] > height[start] ? height[start] : height[last];
    const gap = (last - start) * standard;

    height[last] > height[start] ? start++ : last--;
    max = max < gap ? gap : max;
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
