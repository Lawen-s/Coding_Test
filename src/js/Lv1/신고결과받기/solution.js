function solution(id_list, report, k) {
    let obj = {};// 신고된 횟수
    let check = {};//동일한 신고를 못하게.
    id_list.map((el) => obj[el] = 0);
    id_list.map((el) => check[el] = []);
    let outList = [];
    for (let i = 0; i < report.length; i++) {
        let oneReport = report[i].split(" ");
        console.log(oneReport)
        if (!check[oneReport[0]].includes(oneReport[1])) {
            check[oneReport[0]].push(oneReport[1]);
            obj[oneReport[1]]++;
            console.log(check[oneReport[0]]);
            console.log(check);
            console.log(obj);
            console.log(oneReport[0])
            // if(obj[oneReport[0]]===k){
            //     console.log(obj)
            //     console.log(report[i])
            //     console.log(oneReport);
            //     //outList=oneReport;
            //     outList.push(oneReport[0]);
            // }
        }

    }

    for (let i in obj) {
        if (obj[i] === k) {
            outList.push(i)
        }
    }

    console.log(outList)
    check = Object.values(check).map((el) => el);
    console.log(check);
    console.log(outList);
    return 'k';
}


console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));
//console.log(solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3));