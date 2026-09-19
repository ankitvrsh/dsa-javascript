# Problem

```js
function f8(n) {
  let ans = 0;

  for(let i = 1; i < n; i *= 2) {
    ans += i;
  }

  return ans;
}
```

```text
               i = 1 => i = 2 => i = 4 => i = 8 => i = 16 => ...

instructions:    3        3        3        3        3


Let's say, total iterations of i is k.
Then we have total 3 * k instructions executed.

1st iteration  i = 1  =>  2^0  =>  2^(1-1)
2nd iteration  i = 2  =>  2^1  =>  2^(2-1)
3rd iteration  i = 4  =>  2^2  =>  2^(3-1)
4th iteration  i = 8  =>  2^3  =>  2^(4-1)
...
kth iteration  i = 2^(k-1)


=> 2^(k-1) < n

Taking log base 2 on both sides.

=> (k-1) * log 2 < logn
=> k - 1 < logn
=> k < logn + 1

So, the maximum value of the k can never exceed logn because k is less 
than (logn + 1).

The tightest closest upper bound for k can be logn.

Total instructions = 3 * k
Total instructions = 3 * logn

Time Complexity: O(logn)


NOTE:
In our Big O Notation, we are not writing the base 2.
Because there is no point of writing the base.
Because logn (base 2) can be converted to logn (base 3) by just 
multiplying it with a constant.
log base interconversion is very easy.

Example:
Convert logn (base 3) to logn (base 2).

=> logn (base 3) = logn (base 2) / log3 (base 2)
```
