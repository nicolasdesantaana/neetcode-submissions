class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
   


    topKFrequent(nums, k) { 
        let result = [];
      const counts = nums.reduce(function(acc, cur) {
            acc[cur] = (acc[cur] || 0) + 1;
            return acc;
            }, {});
    return Object.entries(counts)
  .sort((a, b) => b[1] - a[1]) // sort descending by count
  .slice(0, k)
  .map(([num]) => (num));
    }
    
}

