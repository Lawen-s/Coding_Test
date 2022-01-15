function solution(dartResult) {
    let answer = 0;
    let newArr = [];
    dartResult = dartResult.split('');
    console.log(dartResult)
    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] === `S`) {
            console.log(dartResult[i - 1]);
            newArr.push(dartResult[i - 1] * 1);
        } else if (dartResult[i] === 'D') {
            newArr.push(dartResult[i - 1] * dartResult[i - 1]);
        } else if (dartResult[i] === 'T') {
            newArr.push(dartResult[i - 1] * dartResult[i - 1] * dartResult[i - 1]);
        } else if (dartResult[i] === `*` || dartResult[i] === `#`) {
            newArr.push(dartResult[i]);
        }
    }
    console.log(newArr);
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === `*`) {

        } else if (newArr[i] === `#`) {

        }
    }
    return answer;
}

console.log(solution("1S2D*3T"));
console.log(solution("1S*2T*3S"));