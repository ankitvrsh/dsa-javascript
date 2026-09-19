# Problem

```js
function f3(arr, n) {
  // assume arr.length => k

  if(n == 0) {
    return;
  }

  for(let i = 1; i <= arr.length; i++) {
    // some operation
  }

  f3(arr, n-1);
}
```

```text
In every function call, we have a loop of length k which is getting executed.
So, we can say that every function has same number of operations, i.e. O(k)
And total function calls is n.

Total instructions = O(n * k)

Time Complexity: O(n * k)
```
