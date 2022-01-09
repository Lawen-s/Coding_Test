function solution(numbers) {
    let answer = [];
    let newArr = numbers.slice();
    for (let i = 0; i < numbers.length; i++) {
        newArr.splice(0, 1);
        for (let j = 0; j < newArr.length; j++) {
            answer.push(numbers[i] + newArr[j])
        }
    }
    answer = [...new Set(answer)].sort((a, b) => a - b);
    return answer;
}

console.log(solution([2, 1, 3, 4, 1]));