# Problem

```js
function f10(n) {
  for(let i = n; i > 0; i /= 2) {
    for(let j = 0; j < i; j++) {
      console.log(i, j);
    }
  }
}
```

```text
Let's say, outer for loop has total k iterations.

i = n   => j will go n iterations
i = n/2 => j will go n/2 iterations
i = n/4 => j will go n/4 iterations
...
i = n/2^k => j will go n/2^k iterations


Total iterations:
=> n + n/2 + n/4 + n/8 + ... + n/2^k
=> n * (1 + 1/2 + 1/4 + 1/8 + ... + 1/2^k)

The above term is a GP with:
a = 1 and r = 1/2

And we also know from the previous problem that k will be logn.

=> n * (1 + 1/2 + 1/4 + 1/8 + ... + 1/2^logn)


Sum of a GP series:

If r > 1:
Sum = (a * (r^n - 1)) / (r - 1)

If r < 1:
Sum = (a * (1 - r^n)) / (1 - r)

where a = first term, n = total terms and r = ratio / multiplicative factor


So, in above case:
a = 1, r = 1/2 and n = logn + 1 (From 0 to logn, there are total logn + 1 terms)

Sum:
=> (1 * (1 - (1/2)^(logn + 1))) / (1 - 1/2)
=> (1 - (1/2)^(logn + 1)) / (1/2)
=> (2 - (2 / (2)^(logn + 1)))
=> (2 - 1/n)

Now, if n is a very large value, then (1/n) value will be negligible.

Sum:
=> (2 - negligible)
=> Approximately equal to 2
=> Some constant (c)

Total Time Taken:
=> n * c

Time Complexity: O(n)
```
