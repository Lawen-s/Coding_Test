function solution(n) {
    let arr = [4, 1, 2];
    let answer = "";

    while (n) {
        answer = arr[n % 3] + answer;
        n = (n % 3 === 0) ? n / 3 - 1 : parseInt(n / 3);
    }
    return answer
}

//console.log(solution(1));
//console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
//console.log(solution(10))
console.log(solution(11));