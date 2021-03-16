/**
 * @param {number[]} prices
 * @return {number}
 
 We have to determine the maximum profit that can be obtained by making the transactions (no limit on the number of transactions done). For this we need to find out those sets of buying and selling prices which together lead to the maximization of profit.
 
 */
var maxProfit = function (prices) {
  var getMaxProfit = function (prices) {
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) maxprofit += prices[i] - prices[i - 1];
    }
    return maxprofit;
  };

  return getMaxProfit(prices);
};

module.exports = { maxProfit };
