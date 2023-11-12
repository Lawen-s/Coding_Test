function solution(numbers) {
    let answer = 0;
    let rule = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < rule.length; i++) {
        if (!numbers.includes(rule[i])) {
            answer += rule[i];
        }
    }
    return answer;
}