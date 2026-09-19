# Problem

```js
function fib(n) {
  if(n == 0 || n == 1) {
    return n;
  }

  return fib(n-1) + fib(n-2);
}
```

In each function call, we have constant number of operations.

```text
                         fib(5)                  ----- 2^0 function calls
                        /      \
                   fib(4)      fib(3)            ----- 2^1
                  /     \      /     \
             fib(3)   fib(2) fib(2) fib(1)       ----- 2^2
             /    \    /   \   /   \
        fib(2) fib(1)fib(1)fib(0)fib(1)fib(0)    ----- 2^3
        /   \
   fib(1) fib(0)                                 ----- 2^4
```

```text
                                 fib(n)
                               /        \
                         fib(n-1)      fib(n-2)
                         /     \        /      \
                 fib(n-2)  fib(n-3) fib(n-3) fib(n-4)
                  /    \      /   \    /   \     /   \
           fib(n-3) fib(n-4) ...  ... ...  ... ...  ...
            /    \
     fib(n-4) fib(n-5)
        /   \      /   \
      ...  ...   ...  ...
```

```text
In above tree, we are having function calls with respect to powers of 2 in 
each level.
In the last levels, there are some function calls which are going to be missing.

Total number of function calls is approximately equals:
=> 2^0 + 2^1 + 2^2 + 2^3 + 2^4 + ... + 2^(n-1)

This is a GP series.

Sum:
=> (1 * (2^n - 1)) / (2 - 1)
=> 2^n - 1
=> 2^n (approximately equal)

So, we can say that in total overall, there are 2^n function calls.
And in each function call, we are doing constant operations.

Time Complexity = 2^n * c
Time Complexity: O(2^n)


NOTE:
Time Complexity of Iterative Fibonacci Code: O(n)

Hence, Iterative code is better than Recursive code.
```

NOTE:  
O(n) time complexity for calculating Nth fibonacci is also not the most optimal approach.  
There is a method called as Matrix Exponentiation using which we can calculate Nth fibonacci in O(logn) time.  
Read about it.
