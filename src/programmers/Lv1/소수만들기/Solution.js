//내가 쓴 코드(재귀로 풀고싶다.)
// function solution(nums) {
//     let answer = 0;
//  function makeArr(nums,arr,count){
//      if(arr.length===3){
//          console.log(arr);
//      }
//     for(let i =0;i<nums.length;i++){   
//         let num = nums[i];
//         let deleteNum = nums.slice();
//         deleteNum.splice(i,1);
//         if(deleteNum.length===3){
//             if(prime(deleteNum)){
//                 answer++;
//                 return;
//             }
//         }
//      makeArr(deleteNum,arr.concat(num),count-1);
//     }
//  }
//     makeArr(nums,[],3)
//     return answer;
// }
// function prime(arr){
// let result = 0;
// arr.map((el)=>result+=el);
// if(result%2===0||result%3===0){
//     return false;
// }else{
//     return true;
// }
// }

//다른 방법
function solution(nums) {
    let answer = 0;
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) answer++;
            }
        }
    }
    return answer;
}

function isPrime(sum) {
    for (let i = 2; i < sum; i++)
        if (sum % i === 0) return false;
    return true;
}

console.log(solution([1, 2, 3, 4]));