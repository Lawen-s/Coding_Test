// 슬라이딩윈도우를 사용하려고 했으나 됐는지 모르겠음
var test = (capacity, routes) => {
  // 1. routes의 각 값의 1번째 인덱스로 정렬을 합니다. - routes의 각값의 1번째 인덱스가 출발지점
  // 2. routes의 각 값을 value라고 합니다.
  // 3. value[0]번(=a)과 value[1](b)을 비교합니다.
  // 4. a[2]<b[1]인 경우 b[0]<=capacity인지 확인합니다.
  // 5. a[2]>b[1]인 경우 a[0]+b[0]<=capacity 확인합니다.
  // 6. 3 ~ 5번 작업을 반복하여 capacity를 넘기면 false, 안넘기면 true로 결과를 도출합니다.
  let sortRoutes = routes.sort((a, b) => a[1] - b[1]);
  let l = 0;
  let leftCapacity = capacity;
  for (let r = 0; r < sortRoutes.length; r++) {
    // capacity -= sortRoutes[r][0];
    if (sortRoutes[l][2] < sortRoutes[r][1]) {
      leftCapacity += sortRoutes[l][0];
      l++;
    }
    if (sortRoutes[l][2] > sortRoutes[r][1]) {
      leftCapacity -= sortRoutes[r][0];
    }
    if (leftCapacity < 0) {
      return false;
    }
  }
  return true;
};

console.log(
  test(20, [
    [5, 1, 15],
    [14, 3, 18],
    [3, 15, 21],
    [9, 14, 52],
  ])
);
// console.log(
//   test(9, [
//     [3, 2, 6],
//     [5, 1, 4],
//     [1, 7, 13],
//   ])
// );
