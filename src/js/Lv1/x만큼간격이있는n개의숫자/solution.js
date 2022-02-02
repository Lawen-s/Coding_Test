function solution(x, n) {

    return Array(n).fill(x).map((el, idx) => el * (idx + 1));
}


console.log(solution(2, 5));
//console.log(solution(4,3));
//console.log(solution(-4,2));