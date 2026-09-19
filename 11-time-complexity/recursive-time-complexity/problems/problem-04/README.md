# Problem

```js
function f4(n) {
  if(n <= 1) {
    return 1;
  }

  return f4(n-1) + f4(n-1);
}
```

```text
                                  f4(n)                  ---- 2^0 function calls
                               /          \
                        f4(n-1)          f4(n-1)         ---- 2^1
                        /    \            /    \
                 f4(n-2)  f4(n-2)  f4(n-2)  f4(n-2)      ---- 2^2
                  /   \      /   \    /   \      /   \
           f4(n-3) ... ... f4(n-3) ... ... f4(n-3) ...   ---- 2^3
            /   \
      f4(n-4) f4(n-4)
         /  \      /  \
       ...  ...  ...  ...
```

Time Complexity: O(2^n)

## Function slightly modified

```js
function f5(n) {
  if(n <= 1) {
    return 1;
  }

  return 2 * f5(n-1);
}
```

```text
                 f5(n)
                    |
                 f5(n-1)
                    |
                 f5(n-2)
                    |
                 f5(n-3)
                    |
                 f5(n-4)
                    |
                   ...
                    |
                 f5(1)
```

Time Complexity: O(n)

NOTE:  
In recursive code, the way we call the functions can determine a lot of things.
