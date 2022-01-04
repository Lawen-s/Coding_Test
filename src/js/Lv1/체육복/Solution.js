//다른분이 푼 코드 !!!
function solution(n, lost, reserve) {

    // 체육복을 잃어버렸으면서 여벌이 없는 경우
    const realLost = lost.filter((element) => !reserve.includes(element));

    // 여벌이 있으면서 체육복을 잃어버리지 않은 경우
    let realReserve = reserve.filter((element) => !lost.includes(element));

    // 학생 수(n) - 잃어버린 학생이 여벌을 못받은 경우(realLost.filter)
    return (
        // realLost.filter((lost) : 잃어버린 사람 중 여벌을 받을 수 없는 학생을 배열로 반환
        n -
        realLost.filter((lost) => {
            // lend : 체육복을 빌려줄 수 있는 경우 중 첫 번째 요소
            const lend = realReserve.find(
                // 잃어버린 사람의 1칸 주위에 빌릴 사람이 있는 경우
                (reverse) => Math.abs(reverse - lost) == 1,
            );

            // 빌려줄 수 있는 사람이 없으면 진짜 잃어버린 걸로 간주하고 lost를 return
            if (!lend) return lost;
            // 빌려 줬으면 reserve 배열에서 빌려준 사람 제외
            realReserve = realReserve.filter((reverse) => reverse !== lend);
        }).length
    );
}
//내가 푼 코드1.
// function solution(n, lost, reserve) {
//    let arr = [];
//    let newReverse=reserve.slice();
//    newReverse.map((el,idx)=>{
//        console.log(idx)
//        if(el!==lost[idx]-1&&el!==lost[idx]+1&&lost[idx]!==undefined){
//         console.log(lost[idx]);
//         arr.push(lost[idx]);
//        }else{
//            console.log(reserve)
//            reserve.splice(idx,1);
//            lost.splice(idx,1);
//        }
//    })
//    console.log(reserve)
//    console.log(lost)
//    console.log(arr)
//    return n-(arr.length+lost.length)
// }

//내가 푼 코드2.
// function solution(n, lost, reserve) {
//    if(lost.length>=reserve.length){
//  return n-lost.length+lost.filter((el,idx)=>{
//     if(el===reserve[idx]-1||el===reserve[idx]+1){
//         reserve.splice(idx,1);
//         console.log(el)
//         return el
//     }
// }).length
//    }
//    else{
//        return reserve.length+lost.filter((el,idx)=>{
//         if(el===reserve[idx]-1||el===reserve[idx]+1){
//             reserve.splice(idx,1);
//             console.log(el)
//             return el
//         }
//     }).length
//    }
// }


//내가 푼 코드3.
// function solution(n, lost, reserve) {

//     for(let i =0;i<lost.length;i++){
//         for(let j =0;j<reserve.length;j++){
//             if(lost[i]-1===reserve[j]){
//                 console.log(reserve[j]);
//                 console.log(lost[i]);
//                 reserve.splice(j,1);
//                 lost.splice(i,1);
//             }else if(lost[i]+1===reserve[j]){
//                 console.log(reserve[j]);
//                 console.log(lost[i]);
//                 reserve.splice(j,1);
//                 lost.splice(i,1);
//             }
//         }
//     }
//     console.log(lost);
//     console.log(reserve)
//     return n-lost.length

// }

//다른분 풀이 1 (90으로 통과)
// function solution(n, lost, reserve) {
//     let answer = n;
//     let realLost = [];// 잃어버린 학생 정보
//     let cnt = 0; //빌릴수 있는 학생 수

//     //여벌 체육복을 가져온 학생이 체육복을
//     // 도난 당한 경우 reverve와 lost의 중복 제거
//     for(let el of lost){
//         //중복인 경우 여벌 학생정보 삭제
//         if(reserve.includes(el)){
//             let idx = reserve.indexOf(el);
//             reserve.splice(idx,1);
//         }else{
//             realLost.push(el);
//         }
//     }
//     //잃어버린 학생 순회
//     for(let el of realLost){
//         //잃어버린 학생의 앞 번호 학생의 여분이 있을 시
//         if(reserve.includes(el-1)){
//             //빌려주고 난 후, 여분의 학생 정보 삭제
//             let idx = reserve.indexOf(el-1);
//             reserve.splice(idx,1);
//             cnt+=1;
//         //잃어버린 학생의 뒷 번호 학생의 여분이 있을 시
//         }else if(reserve.includes(el+1)){
//             //빌려주고 난 후, 여분의 학생 정보 삭제
//             let idx = reserve.indexOf(el+1);
//             reserve.splice(idx,1);
//             cnt+=1
//         }
//     }
//     //체육수업 들을 수 있는 학생의 수 
//     //= 총학생수 - (잃어버린 학생 - 빌려준 횟수)
//     answer-=realLost.length-cnt;
//     return answer
// }
//다른분 풀이 2
// function solution(n, lost, reserve) {

//     var answer = 0;

//     // 학생 수 만큼 배열의 가지고 있는 유니폼 수를 1로 초기화
//     let hasUniform = new Array(n).fill(1);

//     // 잃어버린 학생은 -1 을 해줌
//     for (let i = 0; i < lost.length; i++) {
//         hasUniform[lost[i] - 1]--;
//     }

//     // 여벌이 있으면 +1 을 해줌
//     for (let i = 0; i < reserve.length; i++) {
//         hasUniform[reserve[i] - 1]++;
//     }

//     for (let i = 0; i < hasUniform.length; i++) {
//         // 유니폼이 없을 때 좌우 학생이 유니폼이 있을경우 빌려줌
//         if (hasUniform[i] === 0) {
//             if (hasUniform[i - 1] === 2) {
//                 hasUniform[i]++;
//                 hasUniform[i - 1]--;
//             } else if (hasUniform[i + 1] === 2) {
//                 hasUniform[i]++;
//                 hasUniform[i + 1]--;
//             }
//         }

//         // 유니폼이 1개이상 있으면 통과
//         if (hasUniform[i] >= 1) {
//             answer++;
//         }
//     }

//     return answer;
// }




console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]))
