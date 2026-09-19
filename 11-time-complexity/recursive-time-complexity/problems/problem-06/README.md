# Problem

```js
function f(n) {
  if(n <= 1) {
    return 1;
  }

  return f(n-1) + f(n-2) + f(n-3);
}
```

```text
                                      f(n)                       ---- 3^0
                           /             |             \
                     f(n-1)          f(n-2)         f(n-3)       ---- 3^1
                  /    |    \      /    |    \     /    |    \
             f(n-2) f(n-3) f(n-4) ...  ...  ...  ...  ...  ...   ---- 3^2
             / | \
       f(n-3) f(n-4) f(n-5)                                      ---- 3^3
        / | \
  f(n-4) f(n-5) f(n-6)
     |
    ...
```

Time Complexity: O(3^n)  
Space Complexity: O(n)
