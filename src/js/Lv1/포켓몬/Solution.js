function solution(nums) {
    let answer = 0;
    let check = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1] && !check.includes(nums[i])) {
            check.push(nums[i]);
            answer++;
        }
        if (answer === nums.length / 2) break;
    }
    return answer;
}
console.log(solution([3, 1, 2, 3]));
//console.log(solution([3,3,3,2,2,4]));
//console.log(solution([3,3,3,2,2,2]));

//다른 방법1.
// function solution(nums) {
//     //최댓값 설정
//     const max = nums.length / 2;
//     //중복 제거
//     const arr = [...new Set(nums)];
//     //삼항 연산자를 이용
//     return arr.length > max ? max : arr.length
//   }
