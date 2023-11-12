//80%정답
function solution(sizes) {
    let wArr = sizes.slice();
    let hArr = sizes.slice();
    wArr = wArr.sort((a, b) => b[0] - a[0]);
    hArr = hArr.sort((a, b) => b[1] - a[1]);
    let h = hArr[0];
    let w = wArr[0];

    if (w[0] >= h[1]) {
        for (let i = 0; i < wArr.length; i++) {
            if (wArr[i][0] > w[1] && wArr[i][1] > w[1]) {
                w[1] = wArr[i][1];
            }
        }
        return w[1] * w[0];
    } else {
        for (let i = 0; i < hArr.length; i++) {
            if (hArr[i][0] > h[0] && hArr[i][1] > h[0]) {
                h[0] = hArr[i][0];
            }
        }
        return h[1] * h[0];
    }
}
//다른 풀이
// function solution(sizes){
//     let big = 0;
//     let small = 0;

//     for(let len of sizes) {
//     //len[0]이 가로길이, len[1]이 세로길이 이다.
//       if(len[0] > len[1]){ // 가로가 더 긴 경우
//         if(big < len[0]) big = len[0];
//         if(small < len[1]) small = len[1];
//       }
//       else { // 세로가 더 긴 경우
//         if(big < len[1]) big = len[1];
//         if(small < len[0]) small = len[0];
//       }
//     };
//     return big * small;
//   }


//console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
//console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])) //120

console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 18]]))