function solution(board, moves) {
    let answer = 0;
    let arr = [];
    for (let el of moves) {
        board.some((doll) => {
            if (doll[el - 1] !== 0) {
                console.log(doll[el - 1]);
                arr.push(doll[el - 1]);
                doll[el - 1] = 0;
                return true
            }
        })
        arr.map((ll, idx) => {
            if (arr[idx] === arr[idx - 1]) {
                arr.pop();
                arr.pop();
                answer += 2;
            }
        }
        )
    }
    return answer;
}