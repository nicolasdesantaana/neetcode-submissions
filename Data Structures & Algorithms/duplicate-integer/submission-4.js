class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mappedNums = new Map();

        for(let i = 0; i < nums.length; i++){
            if(mappedNums.has(nums[i])) return true;
            mappedNums.set(nums[i],nums[i])
        }
        return false;
    }
}
