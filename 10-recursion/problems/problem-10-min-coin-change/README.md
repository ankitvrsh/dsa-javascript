# Problem - Min Coin Change

Consider a money system consisting of n coins. Each coin has a positive integer value. Your task is to produce a sum of money x using the available coins in such a way that the number of coins is minimal.

For example, if the coins are { 1, 5, 7 } and the desired sum is 11, an optimal solution is 5 + 5 + 1 which requires 3 coins.

Input:  
The first input line has two integers n and x: the number of coins and the desired sum of money.  
The second line has n distinct integers c1, c2, …, cn : the value of each coin.

Output:  
Print one integer: the minimum number of coins. If it is not possible to produce the desired sum, print -1.

## Solution

```text
f(coins, x) => Minimum coins required to get x.

Recurrence Relation:
f(coins, x) = 1 + min(f(coins, x - coins[i])) ∀ i ∈ [0, coins.length - 1]
```
