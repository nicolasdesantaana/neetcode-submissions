class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let mappedNums = new Map();

        for(let i = 0;i < nums.length;i++){
            var diff = target - nums[i];
            if(mappedNums.has(diff)) return [mappedNums.get(diff),i];
            mappedNums.set(nums[i],i) 
        }
    }
}
