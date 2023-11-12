function solution(s) {
    s = s.split(" ");
    let max = Math.max(...s);
    let min = Math.min(...s);

    console.log(s, max, min);
    return `${min} ${max}`;
}

//console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
//console.log(solution("-1 -1"));