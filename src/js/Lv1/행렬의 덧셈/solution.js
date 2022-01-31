function solution(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let arr = [];
        for (let j = 0; j < arr1[0].length; j++) {
            arr.push(arr1[i][j] + arr2[i][j]);
        }
        newArr.push(arr)
    }
    return newArr;
}

//다른 방법
// function solution(A,B){

//     return A.map((a,i) => a.map((b, j) => b + B[i][j]));
// }

//console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]));
console.log(solution([[1], [2]], [[3], [4]]));