function maxProfit(prices: number[]): number {
  //Input: [7,1,5,3,6,4]
  //Output: 5
  // 7, 1, 5 | 1, 5, 3
  let minimumPrice = prices[0];
  let maximumProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minimumPrice) {
      minimumPrice = prices[i];
    } else {
      const price = prices[i] - minimumPrice;
      maximumProfit = Math.max(maximumProfit, price);
    }
  }

  return maximumProfit;
}
