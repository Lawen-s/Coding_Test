function solution(x) {
    let add = String(x).split("").reduce((a, b) => Number(a) + Number(b));
    return x % add === 0 ? true : false;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
