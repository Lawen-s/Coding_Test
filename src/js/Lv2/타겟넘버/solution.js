function solution(numbers, target) {
  let answer = 0;
  function sum(arr, num, add) {
    if (num === 0) {
      if (add === target) {
        answer++;
        return;
      }
      return;
    }
    // for(let i =0;i<arr.length;i++){      
    //   let choice = arr[i];
    //   let deleteArr = arr.slice();
    //   deleteArr.splice(i,1);
    //   sum(deleteArr,num--,add-choice);  
    //   sum(deleteArr,num--,add+choice);
    // }
    else {
      let choice = arr[0];
      let deleteArr = arr.slice();
      deleteArr.splice(0, 1);
      sum(deleteArr, num - 1, add + choice);
      sum(deleteArr, num - 1, add - choice);
    }
  }
  sum(numbers, numbers.length, 0)
  return answer;
}


console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));