# Problem

```js
function f0(n) {
  let ans = 1;

  for(let i = 0; i < n; i++) {
    console.log(i);
    ans += i;
  }

  return ans;
}
```

We have to calculate the worst case time complexity for the above function.

Complexity Analysis just depends on the fact that based on the input, how much time the algorithm is taking.

What is the metric to measure time?  
Number of instructions executed.  
Because, we can assume that every single instruction takes c unit of time.  
So, if we have total k instructions, we will spend k * c units of time.

Time Complexity: O(n)
