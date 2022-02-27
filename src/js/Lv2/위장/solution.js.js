function solution(clothes) {
    var answer = 0;
    for (let i = 0; i < clothes.length; i++) {
        let name = clothes[i][0];
        let arr = [];
        arr.push(name);
        //while문을 통해서 옷을 추가하는 방법을 생각해보기
        while (1) {
            let num = i + 1;
            if (num === clothes.length) {
                break;
            }
            // if(clothes[num].includes()){

            // }
            num++;
        }
        answer++;
    }
    return answer;
}