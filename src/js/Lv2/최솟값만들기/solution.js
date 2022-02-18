function solution(A, B) {
    if (Math.max(...A) > Math.max(B)) {
        A.sort((a, b) => b - a);
        B.sort((a, b) => a - b);
    } else {
        B.sort((a, b) => b - a);
        A.sort((a, b) => a - b);
    }
    let num = A.reduce((acc, cur, idx) => acc + (cur * B[idx]), 0)
    return num;
}

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));