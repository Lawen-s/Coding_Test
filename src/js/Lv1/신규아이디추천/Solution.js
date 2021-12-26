//my
function solution(new_id) {
    var answer = [];
    let changeId;
    changeId = new_id.toLowerCase().split('').filter((el) => el !== `!` && el !== `@` && el !== `#` && el !== `$` && el !== `%` && el !== `^` && el !== `&` && el !== `*` && el !== `(` && el !== `)` && el !== `+` && el !== `=`);
    console.log(changeId)
    let newArr = [];
    changeId.forEach((el, index) => {
        if (changeId[index] !== changeId[index + 1]) {
            newArr.push(el);
        }
    });
    newArr = newArr.filter((el, idx) => !(idx === 0 && el === `.` || idx === newArr.length - 1 && el === `.`));
    console.log(newArr);
    if (newArr.length < 3) {
        if (newArr.length === 0) {
            return `aaa`;
        }
        else {
            console.log(newArr)
            for (let i = 0; i < 3; i++) {
                if (newArr[i] === undefined) {
                    answer.push(newArr[i - 1])
                } else {
                    answer.push(newArr[i]);
                }
            }
            console.log(answer.join(''))
            return answer.join('');
        }
    } else {
        if (newArr.length >= 16) {
            newArr = newArr.slice(0, 15);
            newArr = newArr.filter((el, idx) => !(idx === 0 && el === `.` || idx === newArr.length - 1 && el === `.`));
            answer = newArr.join('');
        }
        return answer;
    }
}

//Other1
// function solution(new_id) {
//     var answer = '';
    
//     new_id = new_id.toLowerCase();  // 1. 소문자로 치환
//     new_id = new_id.replace(/[^a-z0-9-._]/gi, ''); // 2. 특정문자 외 제거

//     // 3단계 : 연속된 . 하나로 치환
//     var str = '';
//     for(var i=0; i<new_id.length; i++){
//         if(new_id[i] == '.' && new_id[i-1] == '.'){
//             str += '';
//         }else{
//             str += new_id[i];
//         }    
//     }
//     new_id = str;
   
//     // 4단계 : . 처음 또는 끝일 경우 제거
//     new_id = four(new_id);
    
//     // 5단계
//     if(new_id == '') new_id = 'a';
   
//     // 6단계
//     if(new_id.length>15) new_id = new_id.substring(0,15);
//     new_id = four(new_id);
        
//     // 7단계
//     new_id = seven(new_id);

//     answer = new_id;
//     return answer;
// }

// function four(new_id){
//     if(new_id.substring(0,1) == '.') new_id = new_id.slice(1);
//     if(new_id.substring(new_id.length-1) == '.') new_id = new_id.substring(0,new_id.length-1);
    
//     return new_id;
// }

// function seven(new_id){
//     if(new_id.length < 3){
//         new_id = new_id + new_id.substring(new_id.length-1);
//         return seven(new_id);
//     }else{
//         return new_id;
//     }
// }

//other2
// function solution(new_id) {    
//     const answer = new_id
//         .toLowerCase()
//         .replace(/[^\w-_.]/g, '')
//         .replace(/\.{2,}/g, '.')
//         .replace(/^\.|\.$/g, '')
//         .replace(/^$/, 'a')
//         .slice(0, 15).replace(/\.$/, '');
//     const len = answer.length;
//     return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }