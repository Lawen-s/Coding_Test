function solution(progresses, speeds) {
  let max = 0;
  let count = 0;
  let result = [];
  for (let i = 0; i < progresses.length; i++) {
    let leftJob = 100 - progresses[i];
    let leftDay = Math.ceil(leftJob / speeds[i]);
    if (max < leftDay && count != 0) {
      result.push(count);
      count = 1;
    } else {
      count++;
    }
    max = Math.max(max, leftDay);
  }
  result.push(count);

  return result;
}

function solution(progresses, speeds) {
  let answer = [];
  let pro = progresses.slice();
  pro = pro.map((el) => 100 - el);
  pro = pro.map((el, idx) => Math.ceil(el / speeds[idx]));
  let count = 0;
  let num = pro[0];
  for (let i = 0; i < pro.length; i++) {
    if (num >= pro[i]) {
      count++;
      if (i === pro.length - 1) {
        answer.push(count);
      }
    } else {
      num = pro[i];
      answer.push(count);
      count = 1;
      if (i === pro.length - 1) {
        answer.push(count);
      }
    }
  }
  return answer;
}

//console.log(solution([93, 30, 55],[1, 30, 5]));
//console.log(solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1]));
console.log(solution([96, 94], [3, 3]));
