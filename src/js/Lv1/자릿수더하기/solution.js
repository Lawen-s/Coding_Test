function solution(n) {
    return String(n).split("").reduce((acc, cur) => Number(acc) + Number(cur), []);
}


console.log(solution(123));
console.log(solution(987));