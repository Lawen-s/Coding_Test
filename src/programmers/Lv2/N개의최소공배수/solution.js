//내가 푼 방법
function solution(arr) {
    let max = Math.max(...arr);
    function resol(arr1, max1) {
        let newArr = arr1.filter((el) => {
            if (max % el !== 0) {
                max += max1;
            } else {
                return el
            }
        });
        if (newArr.length === arr.length) {
            //    break;
            return max;
        } else {
            resol(arr1, max1)
        }
    }

    resol(arr, max);
    return max;
}
//다른 방법
// function getGcd(a, b) {
//   if (b === 0) return a;
//   return getGcd(b, a % b);
// }

// function solution(arr) {
//   return arr.reduce((a, b) => (a * b) / getGcd(a, b));
// }

console.log(solution([2, 6, 8, 14]));
//console.log(solution([1,2,3]));