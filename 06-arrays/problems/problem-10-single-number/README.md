# Problem - Single Number

## Solution

### Brute-force approach

We can use two nested for loops to check the duplicate of each element and whenever we found a duplicate, we will mark it as -1, so that we don’t come across it again (Assuming all numbers will be positive in the array).  
That’s how we will check, if we don’t find a duplicate for any number, we will return that number as our answer.

### Better approach 1

We can create a frequency map of all the elements in the array and can use it to find the element whose frequency is 1.

### Better approach 2

We can sort the array and can loop through the array to find the non-duplicate number.

```text
Bitwise XOR:

a  b  result
0  0  0
0  1  1
1  0  1
1  1  0

NOTES:
- In the XOR operation, if we XOR two same values, the output is 0.
- XOR of a value with 0 gives back the same value.
```
