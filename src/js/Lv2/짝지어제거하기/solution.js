function solution(s) {
  let arr = [];

  if (s.length % 2 !== 0) {
    return 0;
  }
  ////효율성 2 통과 x
  // let str = s.slice().split(""); 
  //  for(let el of str){  
  //   if(el===arr[arr.length-1]){
  //       arr.pop();
  //     }else{
  //       arr.push(el);
  //     }
  //   }

  for (let el of s) {
    if (el === arr[arr.length - 1]) {
      arr.pop();
    } else {
      arr.push(el);
    }
  }

  return arr.length === 0 ? 1 : 0;
}

console.log(solution("baabaa"));
//console.log(solution("cdcd"))