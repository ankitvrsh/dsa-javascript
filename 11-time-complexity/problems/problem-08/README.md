# Problem

```js
function f11(n) {
  for(let j = 1; j <= n; j++) {
    for(let i = 0; i < n; i = i + j) {
      console.log(i, j);
    }
  }
}
```

```text
j = 1  =>  i => [0, n-1]  increment = 1  Total iterations = n
j = 2  =>  i => [0, n-1]  increment = 2  Total iterations = n/2
j = 3  =>  i => [0, n-1]  increment = 3  Total iterations = n/3
...
j = n  =>  i => [0, n-1]  increment = n  Total iterations = 1


Total iterations:
=> n + n/2 + n/3 + n/4 + n/5 + ... + 1
=> n * (1 + 1/2 + 1/3 + 1/4 + 1/5 + ... + 1/n)

This is a very common series and it sums up to logn

=> n * logn

Time Complexity: O(n * logn)
```

```text
How the above series sum comes up to logn ?

Above series is a Harmonic Progression.

HP Series:
1/a, 1/a+d, 1/a+2d, 1/a+3d, 1/a+4d, ... 1/a+(n-1)d

where a = first term and d = difference

Sum:
=> (1/d) * loge((2a + (2n - 1)d) / (2a - d))

where loge = log with natural base e (Sometimes also called as lon, ln)


Sum:
=> 1 + 1/2 + 1/3 + 1/4 + 1/5 + ... + 1/n

Here a = 1 and d = 1

=> (1/1) * loge((2 + 2n - 1) / (2 - 1))
=> loge ((2n + 1) / 1)
=> Approximately equal to logn, if n is extremely large, we can avoid 2.

=> logn
```
