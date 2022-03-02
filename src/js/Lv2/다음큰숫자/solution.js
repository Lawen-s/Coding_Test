function solution(n) {
    let oneLength = n.toString(2).split("").filter((el) => el === `1`).length;
    let num = n;
    while (1) {
        num++;
        let newLength = num.toString(2).split("").filter((el) => el === `1`).length;
        if (newLength === oneLength) {
            break;
        }
    }
    return num;
}


//console.log(solution(78));
console.log(solution(15));