function solution(numbers) {
  let answer = 0;
  numbers = numbers.split("")
  let numArr = [];
  function makeArr(arr, newArr, num) {
    let joinNum = newArr.join("");
    if (joinNum.length !== 0) {
      numArr.push(Number(joinNum));
    }
    if (num === 0) {
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      let choice = arr[i];
      let deleteNum = arr.slice();
      deleteNum.splice(i, 1);
      makeArr(deleteNum, newArr.concat(choice), num - 1)
    }
  }
  makeArr(numbers, [], numbers.length);
  newArr = [...new Set(numArr)];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === 2 || newArr[i] === 3) {
      answer++;
    }
    if (newArr[i] % 2 !== 0 && newArr[i] % 3 !== 0 && newArr[i] !== 1) {
      answer++;
    }
  }
  return answer;
}



//console.log(solution("17"));
console.log(solution("011"));