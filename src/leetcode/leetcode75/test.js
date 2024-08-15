var mergeAlternately = function(word1, word2) {
    let max = Math.max(word1.length,word2.length);
    let newstr = '';
    for(let i =0;i<max;i++){
        let word1Str = word1[i]?word1[i]:'';
        let word2Str = word2[i]?word2[i]:'';
        newstr+=word1Str+word2Str;
    }
    return newstr;
};

console.log(mergeAlternately("abc", "pqr"))
console.log(mergeAlternately("ab", "pqrs"))