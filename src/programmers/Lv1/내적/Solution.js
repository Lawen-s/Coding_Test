function solution(a, b) {
    let answer = 0;
    a.map((el, idx) => {
        return answer += el * b[idx];
    })

    return answer;

}

