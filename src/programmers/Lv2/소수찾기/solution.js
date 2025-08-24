function solution(numbers) {
  let answer = [];
  let numArr = numbers.split("");
  const length = numArr.length;
  const isVisited = Array.from({ length: length }, () => false);
  const arr = Array.from({ length: length }, () => 0);

  function dfs(cnt) {
    if (cnt !== 0) {
      let s = "";
      for (let i = 0; i < cnt; i++) {
        s += arr[i];
      }
      if (isPrime(Number(s))) answer.push(Number(s));
    } else if (cnt === length) return;

    for (let i = 0; i < length; i++) {
      if (!isVisited[i]) {
        isVisited[i] = true;
        arr[cnt] = numArr[i];
        dfs(cnt + 1);
        isVisited[i] = false;
      }
    }
  }

  dfs(0);

  return [...new Set(answer)].length;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

//내가 푼 방법
function solution(numbers) {
  let answer = 0;
  numbers = numbers.split("");
  // console.log(numbers.join(""));
  let numArr = [];
  function makeArr(arr, newArr, num) {
    let joinNum = newArr.join("");
    console.log(joinNum);
    console.log(typeof Number(joinNum) === "number");
    if (joinNum.length !== 0) {
      numArr.push(Number(joinNum));
    }
    if (num === 0) {
      console.log(newArr);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      let choice = arr[i];
      let deleteNum = arr.slice();
      deleteNum.splice(i, 1);
      console.log(deleteNum);
      makeArr(deleteNum, newArr.concat(choice), num - 1);
    }
  }
  makeArr(numbers, [], numbers.length);
  newArr = [...new Set(numArr)];
  console.log(newArr);
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
  for (let i = 0; i < newArr.length; i++) {
    if (isPrime(newArr[i])) {
      answer++;
    }
  }
  return answer;
}

//console.log(solution("17"));
//console.log(solution("011"));
console.log(solution("002"));
