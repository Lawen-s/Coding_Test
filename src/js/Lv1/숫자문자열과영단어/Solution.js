function solution(s) {
    let answer = s;
    let changeNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", `eight`, `nine`];
    for (let i = 0; i < changeNum.length; i++) {
        let arr = answer.split(changeNum[i]);
        //문자를 만나는 경우 changeNum에 있는 것과 같은 경우 그문자열을 제외하고 자른다.
        answer = arr.join(i);
        //자른 문자열을 붙이는 데 i를 포함해서 붙인다.
    }

    return answer;
}

// function solution(s) {
//     s = s.replace(/zero/g, 0)
//     .replace(/one/g, 1)
//     .replace(/two/g, 2)
//     .replace(/three/g, 3)
//     .replace(/four/g, 4)
//     .replace(/five/g, 5)
//     .replace(/six/g, 6)
//     .replace(/seven/g, 7)
//     .replace(/eight/g, 8)
//     .replace(/nine/g, 9)
//     return parseInt(s);
// }