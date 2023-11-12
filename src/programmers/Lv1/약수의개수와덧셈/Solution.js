function solution(left, right) {
    let answer = 0;
    let arr = [];
    let count = 0;
    for (let i = left; i <= right; i++) {
        arr.push(i);
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j <= right; j++) {
            if (arr[i] % j === 0) {
                count++;
            }
        }
        if (count % 2 === 0) {
            answer += arr[i];
        } else {
            answer -= arr[i];
        }
        count = 0;
    }
    return answer;
}


console.log(solution(13, 17))