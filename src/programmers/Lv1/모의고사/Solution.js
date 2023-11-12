function solution(answers) {
    let answer = [];
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let oneR = answers.filter((el, idx) => el === one[idx % one.length]).length;
    let twoR = answers.filter((el, idx) => el === two[idx % two.length]).length;
    let thrR = answers.filter((el, idx) => el === thr[idx % thr.length]).length;

    let maxNum = Math.max(oneR, twoR, thrR);
    let newArr = [oneR, twoR, thrR];
    for (let i = 0; i <= newArr.length; i++) {
        if (maxNum === newArr[i]) answer.push(i + 1)
    }
    return answer;
}