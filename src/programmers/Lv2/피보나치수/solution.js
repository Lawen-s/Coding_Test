function solution(n) {
    let answer = [0, 1];
    for (let i = 0; i <= n; i++) {
        if (answer[i] === undefined) {
            answer[i] = answer[i - 1] % 1234567 + answer[i - 2] % 1234567;
        }
    }
    //1234567로 나눈 나머지로 해야 된다고 문제에서 주어져있다.
    // return 문에만 쓰면 통과가 되지 않는다.
    // 그래서 4~6 if문에서 더하는 부분에서 나머지 연산자를 다시 사용하였다.
    return answer[n] % 1234567;
}

console.log(solution(3));
console.log(solution(5));