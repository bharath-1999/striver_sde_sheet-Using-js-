//space:O(1),time-complexity:O(n);
//Leetcode-link:https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var minSoFar=prices[0];
    var ans=0;
    for(let i=0;i<prices.length;i++){
        ans=Math.max(ans,prices[i]-minSoFar);
        minSoFar=Math.min(minSoFar,prices[i]);
    }
    return(ans);
};
