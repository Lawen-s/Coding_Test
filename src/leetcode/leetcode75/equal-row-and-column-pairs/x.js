/**
 * https://leetcode.com/problems/equal-row-and-column-pairs/?envType=study-plan-v2&envId=leetcode-75
 * 24-10-24 - X
 * 24-10-23 - X
 * 24-10-22 - X
 * 24-03-17 - X
 * 23-11-28 - X
 */

/**
 * 24-10-24 - X
 */
var equalPairs = function (grid) {
  let columns = [];
  for (let i = 0; i < grid.length; i++) {
    let arr = [];
    for (let j = 0; j < grid[0].length; j++) {
      arr.push(grid[j][i]);
    }
    columns.push(arr.join());
  }
  let newGrid = grid.map((v) => v.join());
  let count = 0;
  for (let i = 0; i < newGrid.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      if (newGrid[i] === columns[j]) {
        count++;
      }
    }
  }

  return count;
};

/**
 * 24-10-23 - X
 */
var equalPairs = function (grid) {
  let columns = [];
  for (let i = 0; i < grid.length; i++) {
    let arr = [];
    for (let j = 0; j < grid.length; j++) {
      arr.push(grid[j][i]);
    }
    let str = arr.join();
    columns.push(str);
  }
  let newGrid = grid.map((v) => v.join());
  let count = 0;
  for (let i = 0; i < newGrid.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      if (newGrid[i] === columns[j]) {
        count++;
      }
    }
  }
  return count;
};

/**
 * 24-10-22 - X
 */
var equalPairs = function (grid) {
  let arr = [];
  let anotherArr = [];
  grid.map((v) => arr.push(v.join()));
  for (let i = 0; i < grid.length; i++) {
    let newArr = [];
    for (let j = 0; j < grid.length; j++) {
      newArr.push(grid[j][i]);
    }
    anotherArr.push(newArr.join());
  }
  let arrCount = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < anotherArr.length; j++) {
      if (arr[i] === anotherArr[j]) {
        arrCount++;
      }
    }
  }
  return arrCount;
};

/**
 * 24-03-17 - X - 풀이를 보고 이해
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length;
  let count = 0;
  const rows = new Map();

  for (let r = 0; r < n; r++) {
    const row = JSON.stringify(grid[r]);
    rows.set(row, 1 + (rows.get(row) || 0));
  }

  for (let c = 0; c < n; c++) {
    const col = JSON.stringify(grid.map((row) => row[c]));
    count += rows.get(col) || 0;
  }

  return count;
};

// console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]))
// console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]))

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
