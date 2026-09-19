# Problem

```js
function f1(n, m) {
  let ans = 0;

  for(let i = 0; i < n; i++) {
    ans += 1;
  }

  for(let j = 0; j < m; j++) {
    ans += 2;
  }

  console.log(ans);
}
```

Time Complexity: O(n + m)

Sometimes, there can be a case that n and m are considerable / comparable, like they are close to each other (n ≤ 10^6 and m ≤ 10^6).  
Both are comparable, so both of them will be used in the expression.

But, let’s say in some cases, n ≤ 10^6 and m ≤ 10^2.  
Here, m is very less than n.  
So, in this case, m becomes a lower degree term.  
Hence, time complexity evaluates to O(n) only.
