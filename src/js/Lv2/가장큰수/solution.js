//내가 푼 방법
// function solution(numbers) {
//     let max = [];
//     function newNum(arr,nArr,num){
//         if(num===0){
//            // console.log(nArr.join(""))
//             max.push(nArr.join(""));
//             return;
//         }
//         for(let i =0;i<arr.length;i++){
//             let number = arr[i];
//             let deleteNum = arr.slice();
//             deleteNum.splice(i,1);
//             newNum(deleteNum,nArr.concat(number),num-1);
//         }
//     }
//     newNum(numbers,[],numbers.length)
//     return String(Math.max(...max));
// }
//다른사람풀이
function solution(numbers) {
    var answer = numbers;
    answer = answer.sort((a, b) => '' + a + b > '' + b + a ? -1 : 1);
    answer = answer.join('');
    console.log(answer[0]);
    console.log(parseInt(answer))
    //answer = parseInt(answer);

    return answer[0] === "0" ? "0" : answer;
}
console.log(solution([0, 0, 0]))
console.log(solution([9, 997, 99, 878, 87]))
console.log(solution([6, 10, 2]));

//console.log(solution([3, 30, 34, 5, 9]));