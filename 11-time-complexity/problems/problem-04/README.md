# Problem

```js
function f4(n) {
  let ans = 0;

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++) {
      ans += 1;
    }
  }

  return ans;
}
```

```text
               i = 0 => i = 1 => i = 2 => i = 3 => i = 4 => ... => i = n-1

instructions:    0        3        6        9        12             3(n-1)


Total instructions executed = 0 + 3 + 6 + 9 + 12 + ... + 3(n-1)

=> 3 * (1 + 2 + 3 + 4 + ... + (n-1))
=> 3 * Sum of first n-1 natural numbers
=> 3 * ((n * (n-1)) / 2)

3 and 1/2 are constants, so avoiding them.

=> n * (n - 1)
=> n^2 - n

n is also a lower degree term, so avoiding it.

=> n^2

Time Complexity: O(n^2)
```
