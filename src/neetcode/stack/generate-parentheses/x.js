class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    // 풀이 참고
    // dfs방식을 활용
    let result = [];
    this.dfs("", n, result);
    return result;
  }

  dfs(str, num, arr) {
    if (str.length === 2 * num) {
      if (this.valid(str)) arr.push(str);
      return;
    }
    this.dfs(str + "(", num, arr);
    this.dfs(str + ")", num, arr);
  }

  valid(str) {
    let count = 0;
    for (let s of str) {
      s === "(" ? count++ : count--;
      if (count < 0) {
        return false;
      }
    }
    return count === 0;
  }
}
