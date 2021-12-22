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

//Link-https://programmers.co.kr/learn/courses/30/lessons/12912
