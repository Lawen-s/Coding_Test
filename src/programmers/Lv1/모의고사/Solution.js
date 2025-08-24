function solution(answers) {
  let f = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  let s = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5];
  let t = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let users = [f, s, t];
  for (let i = 0; i < users.length; i++) {
    users[i] = Check(answers, users[i]).length;
  }
  const max = Math.max(...users);
  let result = [];
  users.map((v, i) => (max === v ? result.push(i + 1) : null));
  return result;
}

function Check(answers, user) {
  return answers.filter((v, i) => v === user[i % user.length]);
}

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
    if (maxNum === newArr[i]) answer.push(i + 1);
  }
  return answer;
}
