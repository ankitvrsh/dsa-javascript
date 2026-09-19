function minCoinChange(coins, sum) {
  if(sum == 0) {
    return 0;
  }
  if(sum < 0) {
    return Infinity;
  }

  let minCoins = Infinity;

  for(let coin of coins) {
    minCoins = Math.min(minCoins, minCoinChange(coins, sum - coin));
  }

  return minCoins + 1;
}

function minCoinChangeExecutor(coins, sum) {
  const minCoins = minCoinChange(coins, sum);

  if(minCoins == Infinity) {
    return -1;
  }
  return minCoins;
}

console.log(minCoinChangeExecutor([ 1, 5, 7 ], 11)); // 3
console.log(minCoinChangeExecutor([ 7 ], 11)); // -1
