function solution(dartResult) {
    let answer = 0;
    let score = 0;
    let newArr = [];
    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
                score = 10;
                i++;
            } else {
                console.log(dartResult[i])
                score = dartResult[i];
            }
        }
        if (dartResult[i] === `S`) {
            newArr.push(score * 1);
        } else if (dartResult[i] === 'D') {
            newArr.push(score * score);
        } else if (dartResult[i] === 'T') {
            newArr.push(score * score * score);
        } else if (dartResult[i] === "*") {
            newArr[newArr.length - 2] = newArr[newArr.length - 2] * 2;
            newArr[newArr.length - 1] = newArr[newArr.length - 1] * 2;
        }
        else if (dartResult[i] === "#") {
            newArr[newArr.length - 1] = -1 * newArr[newArr.length - 1];
        }
    }
    newArr.map((el) => answer += el)
    return answer;
}

console.log(solution("1D2S#10S"))
// console.log(solution("1S2D*3T"));
// console.log(solution("1S*2T*3S"));