/**
 * https://leetcode.com/problems/equal-row-and-column-pairs/?envType=study-plan-v2&envId=leetcode-75
 */

/**
 * 참고한 방식(https://www.geeksforgeeks.org/count-all-pairs-of-rows-and-columns-which-are-equal/)
 * 1. https://github.com/doocs/leetcode/blob/main/solution/2300-2399/2352.Equal%20Row%20and%20Column%20Pairs/README_EN.md
 * 2. https://www.youtube.com/watch?v=dDmyczX6bFc
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let unmap = new Map();
  for (let i = 0; i < grid.length; i++) {
    let s = "";

    for (let j = 0; j < grid[0].length; j++) {
      s += grid[i][j].toString();
      s += "*";
    }

    if (unmap.has(s)) {
      unmap.set(s, unmap.get(s) + 1);
    } else {
      unmap.set(s, 1);
    }
  }
  let result = 0;

  for (let j = 0; j < grid[0].length; j++) {
    let s = "";
    for (let i = 0; i < grid.length; i++) {
      s += grid[i][j].toString();
      s += "*";
    }
    let num = unmap.get(s);
    result += num !== undefined ? num : 0;
  }
  return result;
};

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);
console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
);
