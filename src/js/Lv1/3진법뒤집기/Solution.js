function solution(n) {
    //10진수를 다른 진수로 변환 시키려고 할때는 toString(다른진수)
    let reverseNum = n.toString(3).split('').reverse().join("");
    return parseInt(reverseNum, 3);
}
//내부함수 이용하지 않은 방법
// function solution(n) {
//     const answer = [];
//     while (n !== 0) {
//         answer.unshift(n % 3);
//         n = Math.floor(n / 3);
//     }
//     console.log(answer);
//     return answer.reduce((acc, v, i) => acc + (v * Math.pow(3, i)), 0);
// }

console.log(solution(45))