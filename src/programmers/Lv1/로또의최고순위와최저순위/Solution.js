function solution(lottos, win_nums) {
  let setWinNumbs = new Set(win_nums);
  let count = 0;
  let zeroCount = 0;
  lottos.map((v) => (v === 0 ? zeroCount++ : 0));
  for (let i = 0; i < 6; i++) {
    if (setWinNumbs.has(lottos[i])) {
      count++;
    }
  }
  return [Rate(count + zeroCount), Rate(count)];
}

function Rate(rate) {
  switch (rate) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
}

//
function solution(lottos, win_nums) {
  let answer = [];
  let rate = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  let low = 0;
  let max = 0;
  for (let el of lottos) {
    let lowRate = win_nums.filter((num) => el === num);
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
