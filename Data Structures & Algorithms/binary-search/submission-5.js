class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        var i = 0;
        var j = nums.length -1;
        if(nums.length == 1 && nums[0] == target)  return i;
        else if(nums.length == 1 && nums[0] != target) return -1
        while(i != j){
            if(nums[i] == target) return i;
            else if(nums[j] == target) return j;
            else {
                if(target < j){
                    j--;
                }
                else if(target > i){
                    i++;
                }
            }
        }
        return -1;
    }
}
