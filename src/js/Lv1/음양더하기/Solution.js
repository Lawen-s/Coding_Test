function solution(absolutes, signs) {
    var answer = 0;
    signs.map((el, idx) => {
        if (el === true) {
            answer += absolutes[idx];
        } else {
            answer -= absolutes[idx];
        }
    })
    return answer;
}