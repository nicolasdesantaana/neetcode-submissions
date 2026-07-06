class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        var result = [];
        for(let i = 0; i < nums.length; i++){
            for(let j = 1; j < nums.length; j++){    
            if((nums[i] + nums[j] == target && i < j)){

   console.log(j)
                console.log(i)
                result.push(i); 
                result.push(j); 
                return result;
            }
             
        }
        }
        return result;
    }
}
