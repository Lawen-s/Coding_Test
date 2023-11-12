//다른사람풀이
function solution(clothes) {
    const len = clothes.length;
    let answer = 1;
    let obj = {};

    for (let i = 0; i < len; i++) {
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
        console.log(obj)
    }
    for (let key in obj) {
        answer *= obj[key];
    }

    return answer - 1;
}
console.log(solution([["yellowhat", "headgear"],
["bluesunglasses", "eyewear"],
["green_turban", "headgear"]]));
// console.log(solution([["crowmask", "face"],
//  ["bluesunglasses", "face"], 
// ["smoky_makeup", "face"]]));