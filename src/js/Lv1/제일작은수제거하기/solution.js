function solution(arr) {
    if (arr.length <= 1) {
        return [-1]
    }
    let num = Math.min(...arr);
    arr = arr.filter((el) => {
        if (el > num) {
            return el
        }
    })
    return arr
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
console.log(solution([]));