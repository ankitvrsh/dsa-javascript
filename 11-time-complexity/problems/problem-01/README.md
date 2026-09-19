# Problem

```js
function f0(n) {
  let ans = 0;

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      ans += 1;
    }
  }

  return ans;
}
```

Worst Case Time Complexity: O(n^2)

What does n^2 signify here?

It signifies that wrt change in the input n, our overall function’s rate of growth is going to increase with a rate of n^2.  
The rate of growth of this function is equivalent to a n^2 curve.  
It means the worst case complexity is as bad as n^2 i.e. function’s rate of growth is as bad as a n^2 curve.
