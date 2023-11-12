function solution(strings, n) {
    let arr = [];

    strings.map((el) => {
        arr.push({ f: el[n], w: el })
    });
    arr = arr.sort((a, b) => {
        if (a.f < b.f) { return -1; }
        if (a.f > b.f) { return 1; }
        if (a.f === b.f) {

            if (a.w > b.w) { return 1; }
            if (a.w < b.w) { return -1; }
        }
    });
    arr = arr.map((el) => el.w)
    console.log(arr)
    return arr;
}

//console.log(solution(["sun", "bed", "car"],1));
console.log(solution(["abce", "abcd", "cdx"], 2))