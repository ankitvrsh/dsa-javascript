# Amortized Analysis

It refers to determining the time-average running time for a sequence of operations.

It is different from average asymptotic analysis because here we do not make any assumptions about the data values, whereas in the average asymptotic analysis, we assume an overall average performance.

Amortized analysis is good for situations where an algorithm performs some good operations and some bad operations.

Amortized analysis is a good way for analysing complexity for those algorithms which perform very good in most of the cases but extremely bad in some of the cases.

NOTE:  
Arrays are of fixed size in C/C++/Java but they are of dynamic size in Python/JavaScript/Ruby.  
For dynamic arrays in C++/Java, we have to use Vectors or ArrayLists.  
So, in languages like JavaScript, we get the access to push/append function on arrays.

## Amortized Analysis with arrays

Internally, arrays are always of fixed size.  
They try to algorithmically do something so that we are able to add elements at the end of the array, i.e. we are able to expand the array during runtime.

Arrays are always handled algorithmically for demonstrating dynamic nature.

### Problem Statement

We have access to fixed size arrays and we have to create dynamic arrays out of it.

### Worst solution

We can create a new array of size n+1 and then copy all n elements from old to new array and then add the new element at the end of the new array.

Time Complexity: O(n)

### Optimal solution

Instead of increasing the length of the array by 1, how about we double it?

```text
                                                Operations  Capacity  Size  Element
10                                                  1          1       1      10
[10]20                                              2          2       2      20
[10][20][30][](4)                                   3          4       3      30
[10][20][30]40                                      1          4       4      40
[10][20][30][40][50][][][](8)                       5          8       5      50
[10][20][30][40][50][60][][](8)                     1          8       6      60
[10][20][30][40][50][60][70][](8)                   1          8       7      70
[10][20][30][40][50][60][70]80                      1          8       8      80
[10][20][30][40][50][60][70][80][90]...[](16)       9          16      9      90
```

```text
In the above diagram, the expensive operations are less compared to the 
efficient ones.


Average Instructions = Total Instructions / Total Insertions

=> (1 + 2 + 3 + 5 + 1 + 1 + 1 + 9 + 1 + 1 + ...) / n
=> (1 + (2^0 + 1) + (2^1 + 1) + (2^2 + 1) + 1 + 1 + 1 + (2^3 + 1) + 1 + 1 + ...) / n

In every instruction, we have a term of 1.

=> ((1 + 1 + 1 + ... + 1 (n times)) + (2^0 + 2^1 + 2^2 + 2^3 + ...)) / n


Let's say that when the size of the array will become n, so we will require 
some n operations.
=> n ≈ 2^k
=> k ≈ logn

So, there will be approximately logn terms.


=> (n + 1 * (2^logn - 1)) / n
=> (2*n - 1) / n
=> constant


So, if we individually see these operations with asymptotic analysis, we will 
feel like:
Best case: Omega(1)
Worst case: O(n)

But if we see it w.r.t. Amortized Analysis, for n insertions the average 
number of instructions is constant.
So, the time complexity for this type of implementation is constant.


NOTE:
This algorithm only works for push/pop from last.
In case of pop, we can half the size of the array.
If we do these operations on the start of the array, then it is always going 
to be O(n).


In this Amortized Analysis, we take the actual average by considering the 
total instructios / total operations, and then we dedice that whether this 
algorithm is efficient or not.
We just don't directly see the worst case or the best case but instead we 
do more mathematical analysis here.

Apart from this algorithm, there are a lot of algorithms also in which 
amortized analysis works absolutely fine.
```
