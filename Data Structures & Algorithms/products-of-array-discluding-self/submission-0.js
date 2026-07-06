class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        for(let i = 0;i < nums.length;i++){
            var acum = 1;
            for(let j = 0;j < nums.length;j++){
          
                if(j != i){
                    console.log(nums[j] + " +" + acum)
                    acum = acum * nums[j];
                }
            }
            result.push(acum);
        }
        return result;
    }
}
