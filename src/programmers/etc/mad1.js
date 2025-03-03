var test = (members, p) => {
  let recomands = {};
  let points = {};
  for (let value of members) {
    let [user, recomand] = value.split(" ");
    recomands[user] = recomand === "-" ? null : recomand;
    points[user] = 0;
  }
  for (let value of members) {
    let [user, recomand] = value.split(" ");
    if (recomand !== "-") {
      // 추천인이 있는 경우
      points[recomand] = points[recomand] + p; // 포인트 추가
      if (recomands[recomand]) {
        // 추천인과 연결된 추천인이 있는 경우
        let firstRecomand = recomands[recomand];
        points[firstRecomand] = points[firstRecomand] + Math.floor(p * 0.1);
      }
    }
  }
  console.log({ recomands });
  console.log({ points });
  return Object.entries(points)
    .sort((a, b) => b[1] - a[1]) // 포인트 기준 내림차순 정렬
    .map(([name, point]) => `${name} ${point}`); // 최종 배열 형태로 변환
};

// console.log(test(["covy -", "teo covy", "felix teo", "vex covy"], 123));
console.log(test(["a -", "b a", "c b", "d c", "e d", "f d"], 500));
