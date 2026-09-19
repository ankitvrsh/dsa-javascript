# Space Complexity

Space Complexity is also one of the most important metric that we have to measure when we are writing algorithms.  
We measure Space Complexity also wrt Asymptotic Analysis.

Space Complexity is space taken wrt change in input.

NOTE:  
99% of the time, we don’t need to consider input/output space in space complexity.

## Space Complexity - Recursive Code

What about Space Complexity of Recursive codes?

The problem with recursive codes is that there is an extra space always involved with a recursive code.  
This extra space is the space of call stack.

Space Complexity for Recursive Factorial code: O(n)  
Because we are only taking the call stack space and in each function call, we are taking constant space.  
If we would be creating some other data structure which is dependent on input n, then the space complexity will be different depending on the data structure created in each function call.
