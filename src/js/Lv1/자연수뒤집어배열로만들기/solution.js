function solution(n) {

    return String(n).split("").map((el) => Number(el)).reverse();
}

// 다른 방법
// function solution(n) {
//     // 숫자풀이
//     var arr = [];

//     do {
//         arr.push(n%10);
//         n = Math.floor(n/10);
//     } while (n>0);

//     return arr;
// }
console.log(solution(12345))
