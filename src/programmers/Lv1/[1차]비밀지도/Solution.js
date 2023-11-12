function solution(n, arr1, arr2) {
    let answer = [];

    let modifiedArr1 = arr1.map((el) => el.toString(2).split(''));
    let modifiedArr2 = arr2.map((el) => el.toString(2).split(''));
    for (let i = 0; i < n; i++) {
        answer.push([]);
        if (modifiedArr2[i].length !== n) {
            for (let j = modifiedArr2[i].length; j < n; j++) {
                modifiedArr2[i].unshift('0');
            }
        }
        if (modifiedArr1[i].length !== n) {
            for (let j = modifiedArr1[i].length; j < n; j++) {
                modifiedArr1[i].unshift('0');
            }
        }
        for (let j = 0; j < n; j++) {
            if (modifiedArr2[i][j] === '1' && modifiedArr1[i][j] === '1') {

                answer[i].push('#');
            } else if (modifiedArr2[i][j] === '0' && modifiedArr1[i][j] === '0') {
                answer[i].push(' ');
            } else {
                answer[i].push('#');
            }
        }
        answer[i] = String(answer[i].join(''));
    }
    return answer
}


console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
//	["#####","# # #", "### #", "# ##", "#####"]

//console.log(solution(6,	[46, 33, 33 ,22, 31, 50],[27 ,56, 19, 14, 14, 10]));
//["######", "### #", "## ##", " #### ", " #####", "### # "]