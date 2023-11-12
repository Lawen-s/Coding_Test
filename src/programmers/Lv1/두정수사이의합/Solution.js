function solution(a, b) {
    let answer = 0;
    if (a > b) {
        let c = b;
        b = a;
        a = c;
    }

    for (let i = a; i <= b; i++) {
        answer += i;
    }

    return answer;
}

console.log(solution(5, 3))
