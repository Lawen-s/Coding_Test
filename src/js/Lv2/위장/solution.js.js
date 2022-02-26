function solution(clothes) {
    var answer = 0;
    for (let i = 0; i < clothes.length; i++) {
        let name = clothes[i][0];
        answer++;
    }
    return answer;
}

console.log(solution([["yellowhat", "headgear"],
["bluesunglasses", "eyewear"],
["green_turban", "headgear"]]));

console.log(solution([["crowmask", "face"],
["bluesunglasses", "face"],
["smoky_makeup", "face"]]));