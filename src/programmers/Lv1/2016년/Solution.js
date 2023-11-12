function solution(a, b) {
    let day = 0;
    let days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    let month31 = [1, 3, 5, 7, 8, 10, 12];//[4,6,9,11]
    for (let i = 1; i <= a; i++) {
        if (i === 2) {
            day += 29;
            if (i === a) {
                b -= 29;
            }
        }
        else if (month31.includes(i)) {
            day += 31;
            if (i === a) {
                b -= 31;
            }
        } else {
            day += 30;
            if (i === a) {
                b -= 30;
            }
        }
    }
    return days[(day + b - 1) % 7];
}

console.log(solution(4, 1));