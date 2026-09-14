# Euclid Algorithm and Proof of Euclid Algorithm

```text
Let’s say, we have to calculate the GCD of a and b, a > b.

Let’s say, we divide 33 by 5, then.
33 = 5 * 6 + 3

To generalize,
Let’s say, we divide a with b, such that q is the quotient and r is the remainder, then.
=> a = b * q + r
=> a - b * q = r    —— eq(1)

Now, let’s say, GCD of a and b is some number G.
If G is the GCD of a and b, then.
a % G == 0 and b % G == 0

Ques: What is bq?
bq is a multiple of b.

Now, if G divides b, i.e. b % G == 0
It implies that, G divides bq.
=> bq % G == 0

Now, our equation was:
a - bq = r

On the LHS, a is divisible by G and bq is also divisible by G.
And by subtracting bq from a, we are getting r.
This means, r is also going to be divisible by G.

Example:
a = 78 and b = 36
78 = 36 * 2 + 6
78 - 36 * 2 = 6

And we know that GCD of 78 and 36 is 6.
Now, 6 completely divides 78 and 6 completely divides 36*2.
Then, 6 should completely divide RHS, i.e. 6, and this is true.

Conclusion:
If G is the GCD of a and b.
Then, we can say that G is the GCD of a, b and r.
And a > b > r.

So, we can somehow use this property in calculating the GCD.

Example:
a = 78 and b = 24
We want to calculate the GCD of 78 and 24.

r = 78 % 24 = 6

Now, by the above property, we can say that whatever is the GCD of 24 and 6, will be the GCD of 78 and 24 also.
Now, the problem boils down to calculate the GCD of 24 and 6.
r = 24 % 6 = 0

If we have two numbers x and y and x % y == 0.
We can say that the GCD of x and y is y.

So, we can say that GCD of 24 and 6 is 6 because 6 is the biggest value which divides both of them.
And, whatever is the GCD of 24 and 6 will be the GCD of 78 and 24.
So, GCD of 78 and 24 is 6.

This approach is called as Euclidean Algorithm.
```

NOTE:  
Write both the iterative and recursive code for finding GCD.
