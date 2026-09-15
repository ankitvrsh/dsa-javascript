# Problem - DNF Algorithm

Given an array which only contains 0 and 1. The data is shuffled randomly.  
Write a function that can rearrange the data such that all the 0’s are present before 1’s.

Input: [1,0,0,1,1,1,0,1,0,0,1]  
Output: [0,0,0,0,0,1,1,1,1,1,1]

Conditions:  
Don’t create a new array.  
Do the rearrangement by reading / accessing the whole array only once (Single Pass).

## Solution

### Simple solution

We can keep a variable countZeros and we will traverse the whole array and count the number of zeros present and increment the variable accordingly.  
In the second pass, in the starting indexes in the array, we will put those many 0s and at the other indexes, we will put 1s.

### DNF Algorithm

This algorithm is based on bucketing.  
Here, we have two buckets where the left bucket contains all 0’s and the right bucket contains all 1’s.  
Now, we have elements in between these two buckets, which we have to sort in between both the buckets.  
We have two pointers, i and j, we can keep any pointer as the dominant pointer (i in this case).

If i is pointing to 1.  
We will swap both of them and do j--.  
We will check that if i is pointing to 0, we will do i++.

In case, if i and j are both pointing to 1.  
In this case, we know that i is pointing to 1 as i is the dominant pointer, we are not sure what j is pointing to.  
We will swap both of them and do j-- because we are sure that after swapping j points to 1 only.  
Now, at pointer i, we will check what value it is pointing to, if it is 0 we will do i++, otherwise we will do nothing and continue with the next swap.
