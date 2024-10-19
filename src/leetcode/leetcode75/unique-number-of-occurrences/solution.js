/**
 * https://leetcode.com/problems/unique-number-of-occurrences/submissions/1104840456/?envType=study-plan-v2&envId=leetcode-75
 * 24-10-19 - O
 * 24-03-10 - O
 * 23-11-23 - O
 */

/**
 * 24-10-19 - O
 */
var uniqueOccurrences = function (arr) {
  arr.sort((a, b) => a - b);
  let result = [];
  let num = arr[0];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num !== arr[i]) {
      if (result.includes(count)) {
        return false;
      }
      result.push(count);
      count = 1;
      num = arr[i];
    } else {
      count++;
    }
  }
  if (result.includes(count)) {
    return false;
  }
  return true;
};

/**
 * 24-03-10 - O - 내가 푼 코드
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map1 = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map1.has(arr[i])) {
      map1.set(arr[i], map1.get(arr[i]) + 1);
    } else {
      map1.set(arr[i], 1);
    }
  }
  let newArr = [...map1.values()];
  let check = newArr.map((x, i) => {
    if (newArr.indexOf(x) === i) {
      return true;
    } else {
      return false;
    }
  });
  return check.includes(false) ? false : true;
};

/**
 * 23-11-23 - O
 * 내가 푼 코드(효율 나쁘지 않음)
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let obj = {};
  let changeArr = [];
  let newArr = new Set(arr);
  let result = newArr.forEach((x) => {
    obj[x] = 0;
  });
  arr.forEach((x) => obj[x]++);
  for (let i in obj) {
    if (!changeArr.includes(obj[i])) {
      changeArr.push(obj[i]);
    }
  }
  return changeArr.length === newArr.size;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));

/**
 * 다른 사람이 푼 코드(효율 좋음)
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let h = {};
  for (let a of arr) {
    h[a] = h[a] + 1 || 1;
  }
  let s = new Set(Object.values(h));
  return s.size === Object.values(h).length;
};
