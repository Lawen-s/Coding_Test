class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    // 1. 숫자 3개를 더해서 0을 만들어야합니다.
    // 2. 3개의 출발점을 기준으로 합니다. 0,1,2가 시작점이됩나다.
    // 3. while문을 사용합니다.
    // 4. i+2가 nums.length를 넘기는 경우 i+1을 한칸이동합니다.
    // 5. i+1이 +1이 된 경우 i+2는 다시 i+1보다 1칸정도 이동하여 진행합니다.
    let i = 0;
    let nextI = i + 1;
    let twoNextI = i + 2;
    let result = [];
    nums.sort((a, b) => a - b);
    while (i < nextI) {
      if (nums[i] + nums[nextI] + nums[twoNextI] === 0) {
        let resultArr = [nums[i], nums[nextI], nums[twoNextI]];
        result.push(String(resultArr));
      }
      if (twoNextI < nums.length - 1) {
        twoNextI++;
      } else if (twoNextI === nums.length - 1 && nextI === nums.length - 2) {
        twoNextI = i + 3;
        nextI = i + 2;
        i = i + 1;
      } else if (twoNextI === nums.length - 1) {
        twoNextI = nextI + 2;
        nextI = nextI + 1;
      } else {
        break;
      }
    }
    let re = [];
    new Set(result).forEach((v) => re.push(v.split(",")));
    return re;
  }
}
