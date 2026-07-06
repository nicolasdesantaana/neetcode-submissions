class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
        var hasDuplicate = false;
        for(let i = 0; i < nums.length-1;i++){
            for(let j = 1; j < nums.length; j++){
                if(nums[i] == nums[j] && i < j){
                    hasDuplicate = true;
                    break;
                }
            }
        }
        return hasDuplicate;
    }
}
