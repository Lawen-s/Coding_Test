function solution(lottos, win_nums) {
    let answer = [];
    let rate = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
    let low = 0;
    let max = 0;
    for (let el of lottos) {
        let lowRate = win_nums.filter((num) => el === num)
        if (lowRate.length !== 0) {
            low++;
            max++;
        }
        if (el === 0) {
            max++;
        }
    }
    answer = [rate[max], rate[low]];
    return answer;
}
