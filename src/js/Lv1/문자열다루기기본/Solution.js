//1-1
// function solution(s) {
//     return s.length===4?(s.includes("a")?false:true):(s.length===6?true:false)
// }
//1-2
// function solution(s) {
//     return (s.length===4||s.length===6)?!!parseInt(s):false
// }
//1-3
// function solution(s) {
//     return (s.length===4||s.length===6)?!isNaN(s):false
// }
//1-4
function solution(s) {
    let regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
}
console.log(solution("a234"));
console.log(solution("1234"));