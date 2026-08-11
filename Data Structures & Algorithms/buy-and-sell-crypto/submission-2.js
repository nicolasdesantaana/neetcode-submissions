class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
            let i = 0;
            let j = i + 1;
            let maxProfit = 0;
            while (i != j && prices[j] != undefined) {
                let profit = prices[j] - prices[i];
                if(profit > maxProfit) maxProfit = profit;
                j++;
                if(prices[j] == undefined) {
                    i++;
                    j = i + 1; 
                }
            }
        return maxProfit;
    }
}
