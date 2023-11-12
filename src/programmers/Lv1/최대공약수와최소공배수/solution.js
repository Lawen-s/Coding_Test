function solution(n, m) {
    if (n > m) {
        let a = n;
        n = m;
        m = a;
    }
    //유클리드호제법
    const maxLow = (a, b) => {
        if (b === 0) return a;
        return maxLow(b, a % b)
    }

    return [maxLow(n, m), n * m / maxLow(n, m)]
}

//console.log(solution(3,12));
//console.log(solution(6,131));
//console.log(solution(3,27))
console.log(solution(8, 4))