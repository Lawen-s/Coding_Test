// ctrl + opt + n 실행
var test = (score) => {
  // 1. score를 100으로 나눈 값을 확인합니다.
  // 2. count = 0 으로 변수를 생성합니다.
  // 3. 100으로 나눈값을 count에 더합니다.
  // 4. score를 100으로 나머지연산 하여 나머지 값을 score에 재할당합니다.
  // 5. 1,2번 작업을 반복합니다.
  // 6. 나머지 연산후 값이 0으로 끝나는 count를 리턴합니다.
  let count = 0;
  let jellyPoints = [100, 50, 5, 1];
  for (let jellyPoint of jellyPoints) {
    let jelly = Math.floor(score / jellyPoint);
    score = score % jellyPoint;
    count += jelly;
  }
  return count;
};

console.log(test(319));
