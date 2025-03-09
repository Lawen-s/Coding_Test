// ctrl + opt + n 실행
var test = (wether, capacity) => {
  let battery = capacity; // 배터리 초기 충전량
  let days = 0; // 사용할 수 있는 최대 일 수

  for (let i = 0; i < wether.length; i++) {
    if (wether[i] === 0) {
      battery = Math.min(battery + 1, capacity); // 충전 (최대 용량을 초과하지 않음)
    } else {
      if (battery === 0) break; // 배터리가 없으면 중단
      battery--; // 배터리 사용
    }
    days++; // 하루 경과
  }

  return days;
  // let days = 0;
  // let bettery = 0;
  // for (let i = 0; i < wether.length; i++) {
  //   days++;

  //   if (wether[i] === 0) {
  //     if (wether[i - 1] === 1) {
  //       bettery = 0;
  //     }
  //     if (bettery < capacity) {
  //       bettery++;
  //     }
  //   } else {
  //     bettery--;
  //     console.log({ i });
  //     if (bettery < 0) {
  //       return days - 1;
  //     }
  //     if (bettery === 0) {
  //       return days;
  //     }
  //   }
  // }
  // return days;
};

// console.log(test([0, 1, 0, 0, 0, 1, 1], 100));
console.log(test([0, 0, 0, 1, 1, 1], 2));
// console.log(test([0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1], 10));
