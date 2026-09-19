# Problem

```js
function f9(n) {
  let ans = 0;

  while(n > 0) {
    ans += n;
    n /= 2;
  }

  return ans;
}
```

```text
In every iteration, we execute 3 instructions.
Let's say, there are total k iterations.
Then we have total 3 * k instructions executed.

1st iteration  n    =>  n/2^0  =>  n/2^(1-1)
2nd iteration  n/2  =>  n/2^1  =>  n/2^(2-1)
3rd iteration  n/4  =>  n/2^2  =>  n/2^(3-1)
4th iteration  n/8  =>  n/2^3  =>  n/2^(4-1)
...
kth iteration  n/2^(k-1)


And, we can say that till the time n > 0, this while loop goes on.
The last value of n for which this loop will go should be 1 because 
in each iteration, we are dividing value of n by 2.

n / 2^(k-1) is approximately equal to 1.


=> n = 2^(k-1)  [approximately equal]

Taking log base 2 on both sides.

=> (k-1) * log 2 = logn
=> k - 1 = logn
=> k = logn + 1


So, the maximum value of the k can never exceed logn because k is less 
than (logn + 1).

The tightest closest upper bound for k can be logn.

So, we can say that overall approximately we have logn iterations.

Total instructions = 3 * k
Total instructions = 3 * logn

Time Complexity: O(logn)
```
