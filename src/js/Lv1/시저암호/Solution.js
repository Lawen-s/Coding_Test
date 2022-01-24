// function solution(s, n) {

//     let bEng = [];
//     let sEng=[];
//     for(let i =65;i<=122;i++){
//         if(i<91){
//             bEng.push(String.fromCharCode(i))
//         }else if(i>96){
//             sEng.push(String.fromCharCode(i));
//         }
//     }
//     let str = s.split("");
//    for(let i=0;i<str.length;i++){
//        if(bEng.includes(str[i])){
//            let num =0;
//            if(str[i]==="Z") num+=n-1;
//            else  num=bEng.indexOf(str[i])+n;
//            str[i]=bEng[num];
//        }else if(sEng.includes(str[i])){
//            let num = 0;
//             if(str[i]==="z") num += n-1;  
//             else num = sEng.indexOf(str[i])+n;  
//             str[i]=sEng[num];
//        }
//    }
//     return str.join("");
// }
//참고
function solution(s, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        const str = s[i];
        // 문자가 아닌 공백일 경우 덧셈 할당
        if (str == ' ') {
            answer += ' ';
            continue;
        }

        // 대문자 문자열에 해당하는 문자가 있을 시 upper, 없다면 lower 할당
        const upperOrLower = upper.includes(str) ? upper : lower;
        // 할당한 문자열에 매개변수 s에 해당하는 인덱스와 n 더하기
        let index = upperOrLower.indexOf(str) + n;
        // 만약 더한 인덱스가 할당한 문자열의 길이보다 길거나 같을 경우 인덱스 - 문자열 길이 빼기
        if (index >= upperOrLower.length) {
            index -= upperOrLower.length;
        }
        // 계산한 인덱스에 해당하는 문자 덧셈 할당
        answer += upperOrLower[index];
    }

    return answer;
}

console.log(solution("a B z", 4));
console.log(solution("AB", 1));
console.log(solution("z", 1))