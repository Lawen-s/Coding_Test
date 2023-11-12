// 내가 푼 방법(오류를 못찾음)
// function solution(arr1, arr2) {
//   let answer = [];
//   let num = arr1[0].length>=arr2[0].length?arr2[0].length:arr1[0].length;
//   arr1.map((el)=>answer.push(Array(num).fill(0)));
//   console.log(num);
//   console.log(answer);
//     for (let i = 0; i < num; i++) {
//       for (let j = 0; j < arr1.length; j++) {
//       for(let l =0;l<arr2.length;l++){
//         answer[i][j] += (arr1[i][l] * arr2[l][j]);
//       }
//     }
//   }
//   return answer;
// }
// 다른 사람 풀이
function solution(A, B) {
  let answer = [];

  for (let i = 0; i < A.length; i++) {
    // 행렬 A의 행 접근 - A
    const row = A[i];
    answer.push([]);
    // 행렬 B의 열 접근해서 곱하기 - B
    // 행렬 B의 열 길이
    for (let j = 0; j < B[0].length; j++) {
      let sum = 0;
      // 행렬 B의 행 길이
      // B는 열을 고정해놓고 행을 이동하기 - C
      for (let k = 0; k < B.length; k++) {
        sum += row[k] * B[k][j];
      }
      answer[i].push(sum);
    }
  }
  return answer;
}
console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));
//console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]));
//console.log(solution([[1, 2, 3], [4, 5, 6]],[[1, 4], [2, 5], [3, 6]]));
//[[14, 32], [32, 77]]