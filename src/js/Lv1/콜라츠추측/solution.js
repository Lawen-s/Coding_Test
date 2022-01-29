function solution(num) {

    let count = 0;
    while (count < 500) {
        if (num === 1) {
            break;
        }
        if (num % 2 === 0) {
            count++;
            num = num / 2;
        }
        else if (num % 2 === 1) {
            count++;
            num = (num * 3) + 1;
        }

    }
    return count === 500 ? -1 : count;
}

console.log(solution(1))
console.log(solution(6));
//console.log(solution(16));
//console.log(solution(626331));