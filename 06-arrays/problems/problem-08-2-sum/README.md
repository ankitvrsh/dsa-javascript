# Problem - 2 Sum

## Solution

### Brute force approach

Get all the pair of elements and check which pair has the sum equal to the target element and return the indices of that pair of elements.  
In 1 second, our computers can approximately execute 10^8 instructions.  
This approach might give us TLE error.

### Better approach

If we have a sorted arrangement of elements in the given array, we can place two pointers, one at the start and other at the end of the array and then move them accordingly to get the desired target sum output.

If we move end pointer to the left, the pair sum will decrease.  
If we move start pointer to the right, the pair sum will increase.

Why did we not place start and end pointers side by side on the first and second elements of the array ?  
Because, in this case we can increase the pair sum by moving end pointer to the right but we don’t have any way to decrease the pair sum.
