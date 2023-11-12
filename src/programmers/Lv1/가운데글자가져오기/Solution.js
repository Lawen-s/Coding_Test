function solution(s) {
    let answer = '';
    s = s.split('');
    if (s.length % 2 === 0) {
        console.log(s)
        answer = String(s.splice(s.length / 2 - 1, 2).join(''));
    } else {
        console.log(s);
        answer = String(s.splice(s.length / 2, 1))
    }
    return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));