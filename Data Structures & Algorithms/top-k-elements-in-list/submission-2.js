class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        var result = [];

        for(let i = 0; i < nums.length;i++){
            var find = result.find(x => x.number == nums[i])
            if(find == undefined) result.push({number:nums[i],freq:1})
            else find.freq++;
        }
        result = result.sort((a,b) => b.freq - a.freq);
        var toReturn = result.slice(0,k).map(x => x.number);
        return toReturn
    }
}
