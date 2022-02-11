function solution(priorities, location) {
    let max = Math.max(...priorities);
    let num = 0;
    let arr = {};
    if (max === priorities[location]) {
        return 1;
    }
    for (let i = 0; i < priorities.length; i++) {
        arr[i] = priorities[i]
    }
    console.log(arr);
    // while(1){
    for (let i = 0; i < priorities.length; i++) {

    }
    // }
    return max;
}

//console.log(solution([2, 1, 3, 2],2));
console.log(solution([1, 1, 9, 1, 1, 1], 0))