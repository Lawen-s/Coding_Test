function solution(numbers, hand) {
    let answer = '';
    let phone = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        0: [3, 1]
    }
    let R = [3, 2];
    let L = [3, 0];
    for (let el of numbers) {
        if (el === 1 || el === 4 || el === 7) {
            answer += "L";
            L = phone[el];
        }
        else if (el === 3 || el === 6 || el === 9) {
            answer += "R";
            R = phone[el];
        } else {
            let [x, y] = phone[el];
            let totalR = Math.abs(R[0] - x) + Math.abs(R[1] - y);
            let totalL = Math.abs(L[0] - x) + Math.abs(L[1] - y);
            if (hand === "right") {
                if (totalR <= totalL) {
                    answer += "R";
                    R = phone[el];
                } else {
                    answer += "L";
                    L = phone[el];
                }
            } else {
                if (totalL <= totalR) {
                    answer += "L";
                    L = phone[el];
                } else {
                    answer += "R";
                    R = phone[el];
                }
            }
        }
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"))