//내가 푼 방법(오류가 많다. 해당방법으로 풀면안된다.)
function solution(n, words) {
    var answer = [];
    let time = 0;
    for (let i = 0; i < words.length; i++) {
        // console.log(words.indexOf(words[i])!==i);
        // console.log(words[i-1][words[i-1].length-1]!==words[i][0]);
        for (let j = i + 1; j < words.length; j++) {
            if (words[i] === words[j]) {
                console.log(j);
                answer.push(j % n + 1);
                answer.push(Math.ceil(j / n));
                console.log(words[j]);
            }
        }
        if (i < words.length - 1) {
            if (words[i][words[i].length - 1] !== words[i + 1][0]) {
                console.log(i + 1)
                answer.push((i + 1) % n + 1)
                console.log((i + 2) / n)
                //time = Math.ceil((i+1)/n);
                time = parseInt(i + 1 / n);
                console.log(time);
                answer.push(time);

            }
        }
    }
    return answer.length !== 0 ? answer : [0, 0];
}

// 다른 방법
// function solution(n, words) {
//     var answer = [0, 0];
//     // 이미 사용한 단어를 넣을 배열
//     var usedWords = []
//     // 1번 플레이어부터 시작
//     usedWords.push(words[0])
//     for (let i = 1; i < words.length; i++) {
//         var beforeWord = words[i-1]
//         var currentWord = words[i]
//         // 이전단어의 맨 뒷글자와 현재단어의 맨 앞글자가 같고
//         // 이전에 사용한적이 없는 단어라면
//         if (beforeWord[beforeWord.length - 1] === currentWord[0]
//             && usedWords.indexOf(currentWord) === -1) {
//             // 계속 게임을 진행
//             usedWords.push(currentWord)
//         } else {
//             // 그게 아니라면 몇번째 턴인지, 몇번째 플레이어 인지 계산해서 리턴해준다.
//             var turn = parseInt(i / n) + 1
//             var player = i % n + 1
//             return answer = [player, turn]
//         }
//     }
//     return answer;
// }


// console.log(solution(3,["tank", "kick", "know", "wheel", "land", 
//"dream", "mother", "robot", "tank"]));
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]));
// console.log(solution(5,["hello", "observe", "effect", "take",
// "either", "recognize", "encourage", "ensure", "establish", "hang", 
//"gather", "refer", "reference", "estimate", "executive"]))