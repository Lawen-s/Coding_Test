function solution(n) {
    var answer = new Array(n).fill(0)

    return answer.map((el, idx) => {
        if (idx % 2 === 0) {
            return "수";
        } else {
            return "박";
        }
    }).join('');;
}


console.log(solution(3));
//console.log(solution(4));
//console.log(solution(10));