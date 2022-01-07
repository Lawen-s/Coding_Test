function solution(n) {
    //10진수를 다른 진수로 변환 시키려고 할때는 toString(다른진수)
    let reverseNum = n.toString(3).split('').reverse().join("");
    return parseInt(reverseNum, 3);
}

console.log(solution(45))