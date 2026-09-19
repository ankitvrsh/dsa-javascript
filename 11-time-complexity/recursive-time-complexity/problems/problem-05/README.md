# Problem

```js
function fib(n) {
  if(n == 0 || n == 1) {
    return n;
  }

  return fib(n-1) + fib(n-2);
}
```

If we carefully see the filling of call stack for the above fibonacci function, then space complexity in this recursive code is not like time complexity, because all of the function calls are not always available in the memory.  
At any point of time, we have maximum n stack frames.

Space Complexity: O(n)
