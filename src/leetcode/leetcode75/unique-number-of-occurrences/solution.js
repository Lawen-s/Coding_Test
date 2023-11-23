/**
 * https://leetcode.com/problems/unique-number-of-occurrences/submissions/1104840456/?envType=study-plan-v2&envId=leetcode-75
 */

/**
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
