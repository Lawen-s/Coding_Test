function solution(arr, divisor) {
    arr = arr.filter((el) => el % divisor === 0);
    return arr.length > 0 ? arr.sort((a, b) => a - b) : [-1]
}


console.log(solution([5, 9, 7, 10], 5));
console.log(solution([3, 2, 6], 10));