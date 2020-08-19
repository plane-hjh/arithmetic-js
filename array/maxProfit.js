// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 输入: [7,1,5,3,6,4]
// 输出: 7
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

// 输入: [1,2,3,4,5]
// 输出: 4
// 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
//      因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。

// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

/**
 * 贪心算法v
 * 问题：最大利润
 * 策略1：从最低点买入，在最高点卖出（追求单次收益）
 * 策略2：从低点买入，只要可以赚钱就卖出；不断买卖（追求多次利益，单次利益不够）
 * 策略3：从低点买入，到价格高点卖出，不断买卖（在保证单次利益的基础上，实现多次交易）
 */

const maxProfit = (prices) => {
  let count = 0;

  // 策略一
  for (let i = 0, len = prices.length; i < len; i++) {
    for (let j = i; i < len - 1; j++) {
      if (prices[j + 1] > prices[j]) {
        count += prices[j + 1] - prices[j]
        i = j;
      } else {
        i = j;
        break;
      }
    }
  }

  return count
}

// 只要股票价格上涨，上涨的部分就是我的利润，可以理解为上涨期间第一天买入，然后一直持有到上涨最后一天即下跌前一天再卖出
// 只要股票价格下跌，那我肯定在下跌前一天卖了，而且下跌期间永远不会买入
// 现实中不存在这样的操作

// 作者：chitanda-eru
// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/yu-zhi-wei-lai-zhe-mai-mai-gu-piao-de-si-lu-by-hut/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// var maxProfit = function(prices) {
//   let profit = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     if (prices[i + 1] > prices[i]) profit += prices[i + 1] - prices[i];
//   }
//   return profit;
// };