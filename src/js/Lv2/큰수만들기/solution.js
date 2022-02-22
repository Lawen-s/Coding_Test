function solution(number, k) {
    let answer = [];
    let arr = number.split("");
    let count = arr.length - k;
    console.log(count);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            num = num + arr[j] + '';
            if (num.length === arr.length - k) {
                console.log(num);
                answer.push(num);
                num = num.substring(0, num.length - 1);
            }
        }
    }
    let max = Math.max(...answer);
    return max;
}

//console.log(solution("1924",2));
console.log(solution("1231234", 3));
//console.log(solution("4177252841",4));