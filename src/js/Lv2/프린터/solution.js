// function solution(priorities, location) {
//     let max = Math.max(...priorities);
//     let num = 0;
//     let arr = {};
//     if (max === priorities[location]) {
//         return 1;
//     }
//     for (let i = 0; i < priorities.length; i++) {
//         arr[i] = priorities[i]
//     }
//     console.log(arr);
//     // while(1){
//     for (let i = 0; i < priorities.length; i++) {

//     }
//     // }
//     return max;
// }

//다른 사람 풀이 방법
function solution(priorities, location) {
    let max;
    let cnt = 0;
    let print = Array.from({ length: priorities.length }, (v, i) => i);
    console.log(print)

    while (true) {
        max = Math.max.apply(null, priorities);
        let n = priorities.shift(); //맨 앞의 요소를 빼낸다

        if (n === max) { //꺼낸 요소가 max와 같으면
            cnt++; //pop하므로 cnt 1증가
            if (location === 0) { //만약 location이 0이되면
                return cnt; //cnt를 return
            }
        } else { //꺼낸 요소가 max와 다르면
            priorities.push(n); //배열 맨 끝에 꺼낸 요소를 추가
        }
        location--; //한 차례마다 location값을 계속 줄여나간다
        console.log(location)
        if (location == -1) { //만약 -1이 되어버리면 다시 배열의 맨끝으로 보낸다
            location = priorities.length - 1;
        }
    }
}
// //다른 사람 풀이 2
// function solution(priorities, location) { 
//     let answer = 0; 
//     //prioritiese와 쌍을 이루어 중요도에 따른 대기목록 순서를 가진다. 
//     let print = Array.from({length: priorities.length}, (v,i) => i); 
//     console.log(print) //인쇄를 요청한 문서의 중요도와 순서가 담겨져있다. 
//     let find = [priorities[location] ,location]; 
//     while(priorities.length !== 0){ 
//         let key = priorities.shift();//중요도 
//         let value = print.shift();//대기목록 
//         let max = Math.max(...priorities);//중요도 최대값 
//         //현재 문서가 중요도가 가장 크고 인쇄를 요청한 문서일시 
//         if(key >= max && key===find[0] && value === find[1]){ 
//             return ++answer; 
//         } 
//         //현재 문서가 중요도만 제일 클시 
//         //-> 출력만 수행 
//         else if(key >= max){ 
//             ++answer; 
//         } 
//         //요청한 인쇄가 아니고 중요도가 낮은 문서일시 
//         //-> 제일 뒤로 보내버린다. 
//         else{ 
//             priorities.push(key); 
//             print.push(value); 
//         } 
//     } 
//     return answer; 
// }

//console.log(solution([2, 1, 3, 2],2));
console.log(solution([1, 1, 9, 1, 1, 1], 0))