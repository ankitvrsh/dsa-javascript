# Big O Notation

NOTE:  
Paste the Big O Notation Diagram from the video.

This notation gives tight upper bound of the given function.

```text
Ex: f(n) = 2 * n^2 + 3

Big O of the function f(n) means that there is some function g(n) such that:

∀ n > n0  0 <= f(n) <= c * g(n)  where c is a constant


f(n) can perform as bad as c * n^2.
So, tight upper bound for function f(n) is O(n^2).
We avoided c as it is a constant.

Summary:
Big O notation means that our function f(n) can perform as bad as c * g(n).
It can never go beyond c * g(n).
```

## Example

```js
let x = 20;
let y = 3000;
let count = 3;

for(let i = x; i <= y; i++) {
  console.log(i * 2);
  count += i;
}

console.log("END");
```

```text
            n = 1    n = 2    n = 3    n = 4    n = 5    n = 6

4 * n + 5     9       13       17       21       25        29
5 * n         5       10       15       20       25        30


4n + 5 <= 5n ∀ n >= 5 where c = 5 and g(n) = n
```

## Note on Big O

Our piece of code is comparable to a piece of code which is having a rate of growth of g(n).  
For Example: Above piece of code is performing similar to an algorithm which is having rate of growth as `y = n`.
