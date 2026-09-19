# Introduction to PMI

## Principal of Mathematical Induction (PMI)

It is kind of like a proving technique.  
A lot of mathematical and algorithmic formulas are generally proved by PMI.

Let’s take a problem:  
Prove that the sum of first n natural numbers is equal to [(n * (n + 1)) / 2]

In PMI, generally we take 3 step procedure.

1. Base Case - It is the smallest input value for which we already know the answer.
In this case, the answer is 1 for n = 1.
And if we put n value as 1 in the above formula, then the above formula also works for it.

2. Assumption - Let’s assume formula works correctly for n = k.
Why are we assuming this?
For Example, let’s assume that the formula works for n = 3.
And somehow using this assumption, we can prove that this formula works for n = 4 also.
Then, it’s a good sign that the formula is correct.
If using n = 3, we can prove n = 4.
That means, using n = 2, we will be able to prove n = 3.
And we know, formula works for n = 1.
That means, then all of this will start implying.
That is why, we will assume that the formula works correctly for some term n = k.

3. Self Work -
Using the fact that the formula works for n = k, we will try to prove that the formula works for n = k + 1 also.

## Proof

```text
Assumption: For n = k

We assumed that the formula works for n = k.

Sum of first k natural numbers = ((k * (k + 1)) / 2)


Self Work: Prove for n = k + 1

Sum of first (k + 1) natural numbers will be:

=> 1 + 2 + 3 + ... + k-1 + k + k+1
=> Sum of first k natural numbers + (k+1)

=> ((k * (k + 1)) / 2) + (k+1)
=> (((k+1) * (k+2)) / 2)

And if we put the value of n as (k+1) in the given formula, we will get:
=> (((k+1) * (k+2)) / 2)

The values that we are getting by manually and by the formula are same.
Hence Proved.


Using this approach only, we can solve many problems like:
Sum of squares of first N natural numbers
Sum of cubes of first N natural numbers
And so on.
```
