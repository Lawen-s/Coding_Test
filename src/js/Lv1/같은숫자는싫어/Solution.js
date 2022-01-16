function solution(arr) {
    let answer = [];
    answer = arr.filter((el, idx) => arr[idx + 1] !== el)
    return answer;
}


console.log(solution([1, 1, 3, 3, 0, 1, 1]))