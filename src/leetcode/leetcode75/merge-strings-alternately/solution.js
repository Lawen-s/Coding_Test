/**
 * leetcode 주소
 * https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
 * 
 *  */ 

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let oneLength = word1.length;
  let twoLength = word2.length;
  let newWord = '';
  let wordLength = oneLength>=twoLength?oneLength:twoLength;
  for(let i=0;i<=wordLength;i++){
      if(i<oneLength){
          newWord+=word1[i];
      }
      if(i<twoLength){
          newWord+=word2[i];
      }
  }
  return newWord
};

/**
 * 내가 푼 방법(2024-01-30)
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let num = word1.length>= word2.length? word1.length: word2.length;
    let merge = ''
    for(let i=0;i<num;i++){
        w1=word1[i]?word1[i]:''
        w2=word2[i]?word2[i]:''
        merge += w1+w2
    }
    return merge
};