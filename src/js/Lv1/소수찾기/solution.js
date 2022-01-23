function solution(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    console.log(arr);
    for (let i = 1; i * i < n; i++) {
        if (arr[i]) {
            console.log(arr[i]);
            //2,3,5,7
            let num = arr[i];
            for (let j = num * num; j <= n; j += num) {
                console.log(arr[j - 1])
                //2의 배수 ,3의 배수,5의 배수,7의배수를 확인
                arr[j - 1] = 0;
            }
        }
    }
    arr.shift();

    return arr.filter((el) => el).length;
}

console.log(solution(5));
//console.log(solution(5));