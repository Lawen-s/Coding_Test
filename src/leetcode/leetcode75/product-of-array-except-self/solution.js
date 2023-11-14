/**
 * https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=leetcode-75
 */


/**
 * 내 코드
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let newArray = [];
  for (var i = 0; i < nums.length; i++){
    let newNum = nums[i]===0?1:1
    for(var j = 0; j < nums.length; j++){
      if(i!==j){
        console.log(nums[j])
        newNum*=nums[j]
      }
    }
    console.log(newNum)
  newArray.push(newNum)

}
return newArray
};

/**
 * 참고 코드(효율이 좋음)
 * @param {number[]} nums
 * @return {number[]}
 */
// const productExceptSelf = (nums) => {
//   const res = [];

//   let productPlaceholder = 1;
//   for ( let i = 0; i < nums.length; i++ ) {
//       res[i] = productPlaceholder;
//       productPlaceholder *= nums[i];
//     }
    
//     productPlaceholder = 1;
//     for ( let j = nums.length - 1; j >= 0; j-- ) {
//       res[j] *= productPlaceholder;
//       productPlaceholder *= nums[j];
//   }

//   return res;
// };
