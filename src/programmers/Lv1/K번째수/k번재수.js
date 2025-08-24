function solution(array, commands) {
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    let start = commands[i][0] - 1;
    let end = commands[i][1];
    let select = commands[i][2] - 1;
    let sliceArr = array.slice(start, end).sort((a, b) => a - b)[select];
    result.push(sliceArr);
  }
  return result;
}

function solution(array, commands) {
  let answer = [];
  for (let el of commands) {
    let spread = array.slice(el[0] - 1, el[1]).sort((a, b) => a - b)[el[2] - 1];
    answer.push(spread);
  }
  return answer;
}
