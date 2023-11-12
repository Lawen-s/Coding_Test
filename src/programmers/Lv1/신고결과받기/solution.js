// 내가 푼 코드
// function solution(id_list, report, k) {
//     let obj = {};// 신고된 횟수
//     let check = {};//동일한 신고를 못하게.
//     id_list.map((el) => obj[el] = 0);
//     id_list.map((el) => check[el] = []);
//     let outList = [];
//     for (let i = 0; i < report.length; i++) {
//         let oneReport = report[i].split(" ");
//         console.log(oneReport)
//         if (!check[oneReport[0]].includes(oneReport[1])) {
//             check[oneReport[0]].push(oneReport[1]);
//             obj[oneReport[1]]++;
//             console.log(check[oneReport[0]]);
//             console.log(check);
//             console.log(obj);
//             console.log(oneReport[0])
//             // if(obj[oneReport[0]]===k){
//             //     console.log(obj)
//             //     console.log(report[i])
//             //     console.log(oneReport);
//             //     //outList=oneReport;
//             //     outList.push(oneReport[0]);
//             // }
//         }

//     }

//     for (let i in obj) {
//         if (obj[i] === k) {
//             outList.push(i)
//         }
//     }
//     obj=[];    
//     check = Object.values(check).map((el) => el);
// for(let j of check){
//     let num = 0;
//     for(let k of j){
//         num+=outList.filter((el)=>el===k).length;
//     }
//     obj.push(num)
// }
// console.log(obj)
//     console.log(check);
//     console.log(outList);
//     return obj;
// }
//참고 후 수정 한 코드
function solution(id_list, report, k) {
    let check = {};//동일한 신고를 못하게.
    id_list.map((el) => check[el] = []);
    let mail = Array(id_list.length).fill(0);//신고 횟수를 기록
    console.log(mail);
    for (let i = 0; i < report.length; i++) {
        let oneReport = report[i].split(" ");
        if (!check[oneReport[1]].includes(oneReport[0])) {
            check[oneReport[1]].push(oneReport[0]);
        }

    }
    for (let i in check) {
        if (check[i].length >= k) {
            check[i].map((el) => {
                mail[id_list.indexOf(el)] += 1;
            })
        }
    }

    return mail;
}



console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));
//console.log(solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3));