function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}

//시간초과1.
// function solution(participant, completion) {
//     let answer = "";
     
//     for(let i =0;i<completion.length;i++){
//                 let a=participant.indexOf(completion[i]);
//                 participant.splice(a,1);                    
//     }
//     answer+=participant;
//     return answer;
// }


//시간초과2.
// function solution(participant, completion) {
//     let answer = "";
     
//     for(let i =0;i<participant.length;i++){
//             if(!completion.includes(participant[i])){
//                answer+=participant[i];
//             }else{
//                 let a=completion.indexOf(participant[i]);
//                 completion.splice(a,1);             
//             }
        
//     }
//     return answer;
// }
