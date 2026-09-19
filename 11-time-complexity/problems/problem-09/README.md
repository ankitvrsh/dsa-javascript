# Problem

```js
function f12(n) {
  let ans = 0;

  for(let i = 2; i <= n; i *= i) {
    ans++;
  }
}
```

```text
Values of i:
2 => 4 => 16 => ...

2^1 => 2^2 => 2^4 => 2^8 ... 2^k

2^k is some final value of i which will be less than or equal to n.

=> 2^k <= n

Taking log on both sides

=> k <= logn (base 2)

So, now we know that the last term is going to be something like 2^logn.
But, just calculating this much doesn't give us the complexity analysis.
Because k doesn't denote number of iterations here.
k denotes the final power of i.

1st iteration => 2^1
2nd iteration => 2^2
3rd iteration => 2^4
4th iteration => 2^8
...
Tth iteration => 2^k


Now, if we check the powers.

1st iteration => 1 => 2^0
2nd iteration => 2 => 2^1
3rd iteration => 4 => 2^2
4th iteration => 8 => 2^3
...
Tth iteration => 2^T-1

T denotes total iterations.
And we know that our final power is k.

=> 2^T-1 = k

Taking log on both sides

=> (T - 1) * log2 = logk
=> T = logk + 1

And we know that the maximum value of k can be logn

=> T = log(logn) + 1


Time Complexity = O(log(logn))


Time Complexity depends on Number of instructions executed.
Number of instructions here depends on the number of iterations.
And we have constant number of instructions in each iteration.
So, time complexity depends on the number of iterations.
```
