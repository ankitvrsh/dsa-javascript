# Introduction to Recursive Time Complexity

We have to do the time complexity analysis using the number of instructions executed w.r.t. the input.  
Technically in Recursive codes, there are two techniques to calculate time complexity.

```js
function fact(n) {
  if(n == 0) {
    return 1;
  }

  return n * fact(n - 1);
}
```

```text
if check => constant time
product => constant time
calling a function => constant time

Total time taken:
fact(5) + fact(4) + fact(3) + fact(2) + fact(1) + fact(0)
constant + constant + constant + constant + constant + constant


In these kind of recurrences, total instructions can be calculated very 
easily by using below formula.

Total instructions = Number of instructions in one function call * Total 
number of function calls

This is not a general formula, because there will be cases where this 
formula might not work.

All those relations which are not Divide and Conquer Relations can be easily 
generalized with the above formula.

Example:
If there is a for loop in the function which is dependent on n input, then the 
above formula will not work, because in each function call, the for loop 
instructions count in changing because of n.


Time Complexity = c * n
Time Complexity: O(n)
```
