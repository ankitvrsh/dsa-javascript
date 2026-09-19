# Best Case Analysis

Sometimes two algorithms have same worst case analysis and then we have to decide which algorithm is better.  
In this case, we try to decide the better algorithm based on their average case and best case analysis.

Bubble Sort and Selection Sort, both have O(N^2) worst case time complexity.  
But Bubble Sort’s best case time complexity is Omega(N) whereas Selection Sort works in Omega(N^2) only.

So, it is better to understand the best case analysis also.

NOTE:  
Paste the diagram from the video.

## Best Case Analysis (Big Omega)

The Big Omega notation gives the tight lower bound of the given algorithm.

```text
Big Omega of the function f(n) means that there is some function g(n) such that:

∀ n > n0  0 <= c * g(n) <= f(n)  where c is a constant

Ω(g(n)) => Best Case of f(n)

f(n) can never perform better than c * g(n).


Example: f(n) = 5 * n^2

For c = 5 and g(n) = n^2

It is equal to Ω(n^2) for all n0 = 1.
```

```js
function search(arr, element) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == element) {
      return i;
    }
  }

  return -1;
}

// Best Case: Omega(1)
// Worst Case: O(n)
```

Omega technically denotes that if the algorithm is going to perform good, then what is the tightest lower bound for this.  
It can never go lesser than this.  
That's what Best Case Analysis works on.
