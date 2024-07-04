var successfulPairs = function(spells, potions, success) {
    let arr = [];
    let sortedPotions = potions.sort();
    for(let i =0;i<spells.length;i++){
        let left = 0;
        let right = sortedPotions.length-1;
        while(left<=right){
            let mid = Math.floor((left+right)/2);
            if(spells[i]*sortedPotions[mid]>=success){
                right=mid-1;
            }else{
                left=mid+1;
            }
        }
        let count = sortedPotions.length-left;
        arr.push(count);
    }
    return arr;
};

console.log(successfulPairs([39,34,6,35,18,24,40],[27,37,33,34,14,7,23,12,22,37],43))