class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        var firstDay = 0;
                 var maxProfit = 0;
         while(firstDay < prices.length){

        for(let i = 1; i < prices.length;i++){

            if( i > firstDay){
                var profit = prices[i] - prices[firstDay];
                if(profit > maxProfit) {
                    maxProfit = profit;
                }
                
            }

            }
               firstDay++;
         }
      
        return maxProfit;
    }
}
