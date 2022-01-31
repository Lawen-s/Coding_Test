function solution(n) {

    return n.substr(0, n.length - 4).replace(/[0-9]/g, "*") + n.substr(n.length - 4, n.length);
}

//다른 방법 1.
// function hide_numbers(s){
//     var result = "*".repeat(s.length - 4) + s.slice(-4);
//     //함수를 완성해주세요

//     return result;
//   }
//다른 방법 2.

// function hide_numbers(s) {
//     return s.replace(/\d(?=\d{4})/g, "*");
//   }


console.log(solution("01033334444"));
console.log(solution("027778888"));