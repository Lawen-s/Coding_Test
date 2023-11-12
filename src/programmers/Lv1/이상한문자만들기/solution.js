function solution(s) {
    let answer = '';
    s = s.split(" ");
    console.log(s)
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            if (j % 2 === 0) {
                answer += s[i][j].toUpperCase();
            } else {
                answer += s[i][j].toLowerCase();
            }
        }
        answer += " "
    }
    return answer.slice(0, answer.length - 1);
}
// //다른 방법
// function solution(s){
//     /(\w)(\w)/g - 문자가 중복되서 나오면 정규표현식
//     return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
//   }

console.log(solution("try hello world"))