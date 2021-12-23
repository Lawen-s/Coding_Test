function solution(array, commands) {
    let answer = [];
    for (let el of commands) {
        let spread = array.slice(el[0] - 1, el[1]).sort((a, b) => a - b)[el[2] - 1]
        answer.push(spread)
    }
    return answer;
}