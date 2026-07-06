class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var numMap = new Map();

        for(let i = 0; i < nums.length;i++){
            if(numMap.get(nums[i],) == undefined){
                console.log(nums[i])
                numMap.set(nums[i],"a")
            } 
      
            else return true;
          
        }
                    return false;
    }
}
