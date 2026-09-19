# Problem

```js
function f2(n) {
  if(n == 0) {
    return;
  }

  for(let i = 1; i <= n; i++) {
    // some operation
  }

  f2(n-1);
}
```

```text
In this case, we cannot directly use that formula to calculate total 
instructions.

Generally to analyse these kind of problems, we can take some simple examples.

f2(5)    =>  f2(4)    =>  f2(3)    =>  f2(2)    =>  f2(1)    =>  f2(0)
c + 5 + c    c + 4 + c    c + 3 + c    c + 2 + c    c + 1 + c

Total instructions:
=> 5 + 2c + 4 + 2c + 3 + 2c + 2 + 2c + 1 + 2c

If we see in terms of n, then:
=> n + 2c + (n-1) + 2c + (n-2) + 2c + ... + 1 + 2c

2c is a constant term, so we can avoid it.

=> n + n-1 + n-2 + n-3 + ... + 1
=> (n * (n + 1)) / 2

Time Complexity: O(n^2)
```
