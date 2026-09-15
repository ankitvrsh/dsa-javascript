function maxProfit(prices) {
  let profit = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;

  for(let price of prices) {
    let currProfit = price - minPrice;

    if(currProfit > profit) {
      profit = currProfit;
    } else if(price < minPrice) {
      minPrice = price;
    }
  }

  return profit;
}

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [7, 6, 4, 3, 1];
const result = maxProfit(prices);
console.log(result);
