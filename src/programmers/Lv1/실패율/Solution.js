//내가 푼 코드 (70%) - 시간초과
function solution(N, stages) {
    let answer = [];
    let users = stages.length;
    //배열안에 객체로 넣으려고 함
    for (let i = 1; i <= N + 1; i++) {
        let obj = {};
        obj[i] = 0;
        answer.push(obj)
    }
    //객체의 키값이 동일하게 나오는 경우 멈춰있는 스테이지이기 때문에 +1
    for (let i = 0; i < users; i++) {
        answer.map((el) => {
            if (Number(Object.keys(el)) === stages[i]) {
                el[stages[i]]++;
            }
        }
        )
    }
    //배열안 객체의 value값을 도전자의 숫자로 나누고 다시 저장하는 반복문
    for (let i = 0; i < answer.length; i++) {
        let value = Number(Object.values(answer[i])) / users;
        users -= Number(Object.values(answer[i]));
        answer[i] = { i: i + 1, value };
    }
    //스테이지 모두 통과된 사람은 배열에 없어도 되서 제거
    answer = answer.filter((el) => el["i"] !== N + 1);
    //정렬
    answer.sort((a, b) => b.value - a.value);
    console.log(answer);
    //스테이지 수만 뽑아낼수있도록 map메서드 사용
    answer = answer.map((el) => {
        return el["i"]
    })
    return answer;
}

//다른 방법
// function solution(N, stages) {
//     let result = [];
//     for(let i=1; i<=N; i++){
//         //분모
//         let reach = stages.filter((x) => x >= i).length;
//         //분자
//         let curr = stages.filter((x) => x === i).length;
//         result.push([i, curr/reach]);
//     }
//     result.sort((a,b) => b[1] - a[1]);
//     return result.map((x) => x[0]);
// }

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
console.log(solution(4, [4, 4, 4, 4, 4]))