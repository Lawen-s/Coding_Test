function solution(numbers) {
    let answer = 0;
    numbers = numbers.split("")
    // console.log(numbers.join(""));
    let numArr = [];
    function makeArr(arr, newArr, num) {
        let joinNum = newArr.join("");
        console.log(joinNum)
        console.log(typeof (Number(joinNum)) === "number")
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
            makeArr(deleteNum, newArr.concat(choice), num - 1)
        }
    }
    makeArr(numbers, [], numbers.length);
    newArr = [...new Set(numArr)];
    console.log(newArr)
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === 2 || newArr[i] === 3) {
            answer++;
        }
        if (newArr[i] % 2 !== 0 && newArr[i] % 3 !== 0 && newArr[i] !== 1) {
            console.log(newArr[i])
            answer++;
        }
    }
    return answer;
}



//console.log(solution("17"));
console.log(solution("011"));