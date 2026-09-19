# Problem - Counting Binary Without Consecutive 1

Given a positive integer value n, n>0. Count the number of binary strings (Strings which only got 0 or 1) of length n, such that there are no consecutive ones.

Input:  
n = 3

Output:  
5 [000, 001, 010, 100, 101]

## Solution

```text
MY UNDERSTANDING:

Why the above solution works?

Let's consider these examples:

n = 1  =>  0, 1
n = 2  =>  00, 10, 01
n = 3  =>  000, 100, 010, 001, 101
n = 4  =>  0000, 1000, 0100, 0010, 1010, 0001, 1001, 0101

NOTE:
When we are counting the binary strings for a particular value of n, we can 
take all the strings from (n - 1) case and can append a 0 at the end of all 
those strings, which will create n length strings for us without any 
consecutive ones.

If you see the strings for n = 3, we can take all the strings from n = 2 case 
considering above note, so we have 3 strings from n = 2 case.

Now, when we move from n to (n + 1), we take all strings and append a 0 at the 
end for (n + 1) case.
So, when we moved from n = 1 to n = 2, we have 2 strings in n = 2 which ends in 
0. So, we can safely append 1 at the end of these strings.

That's why, for any value n, the answer lies in the counts of (n - 1) and 
(n - 2) length strings.
```
