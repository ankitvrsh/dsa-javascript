# Problem

Given a decimal number, return its binary number.

## Solution

From the number system lecture, here we will be using two concepts from there.

Every odd number has the last bit as 1.  
So, if number % 2 == 0, then last bit will be 0 otherwise 1.

If we remove the last bit, we will get number as floor(number/2).

Using both the above concepts, we will find the binary representation of a given number.

Example:

```text
34 -> even -> 0
17 -> odd  -> 1
8  -> even -> 0
4  -> even -> 0
2  -> even -> 0
1  -> odd  -> 1

Binary of 34: 100010
```
