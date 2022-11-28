/** https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Test Case 1

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Test Case 2

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

 */

// Solution 1

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {

    let minprice = prices[0]
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i]
        } else if (prices[i] - minprice > profit) {
            profit = prices[i] - minprice
        }
    }
    return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5


// Solution 2 with Math.min and Math.max functions

const maxProfit2 = function (prices) {

    let [curLowestBuyPrice, curProfit] = [Infinity, 0];

    for (let stockPrice of prices) {
        let [prevLowestBuy, prevProfit] = [curLowestBuyPrice, curProfit];
        curLowestBuyPrice = Math.min(curLowestBuyPrice, stockPrice);
        curProfit = Math.max(curProfit, stockPrice - prevLowestBuy);
    }

    return curProfit;
};

console.log(maxProfit2([7, 1, 5, 3, 6, 8])); // 7