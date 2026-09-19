# Introduction to Asymptotic Analysis

This word Asymptotic Analysis is actually coming from the word Asymptote.

Asymptote:  
It is a straight line that constantly approaches a given curve but doesn’t meet at any infinite distance.  
It doesn’t make a lot of difference if we don’t know about Asymptote.  
Asymptotes as a curve are mainly related for very high values. That’s why we call it as Asymptote.

Asymptotic Analysis is based on majorly two terms:

- Rate of growth of algorithm (Running time wrt input size)
- Behaviour of the rate at very large input values.

## Effects of input change on algorithm

Input (what type of input, size of input, how input is given) directly affects the course of algorithm execution.

## Rate of Growth

We always care about how the algorithms are performing for large input size.

Rate of Growth:  
Rate at which running time increases as a function of input is called Rate of Growth.  
That is, how fast the rate of change of time is increasing.

If running time changes extremely high with a small change in input, then growth is high.

Two observations to make from all of this discussion:

- Whenever we are comparing algorithms, we don’t care about small input sizes. We always care about big input sizes i.e. how our algorithms perform on bigger inputs.
- We are going to judge algorithms based on their rate of growth, i.e. how fast the time is going to change with a very small change in the input size.

Based on these two observations, we introduce a new way of analysing algorithms called as Asymptotic Analysis.

This is the industry accepted way of analysing algorithms. It is independent of the hardware, independent of the CPU conditions that we are going to run our algorithms on and it is going to judge the algorithms based on their rate of growth and how the algorithm is performing for very high input.

## Rate of Growth Graph Visualisation

Website for Graph Visualisation:  
<https://www.desmos.com/calculator>

```text
Decreasing Rate of Growth going downwards:

y = n!
y = 2^n
y = n^3
y = n^2
y = n * n^1/2
y = n * logn
y = n
y = n^1/2
y = logn
y = 3
```

```text
y = n!  =>  High Rate of Growth (Worst)
...
y = 3   =>  Slow Rate of Growth (Best)
```

NOTE:  
Attach screenshot from the website of the below graphs.

## Avoiding lower degree terms and constants

In Asymptotic notation, we avoid all constants and lower degree terms.  
We only concern ourselves with the highest degree term.

## Measuring Complexity of an Algorithm

Technically, an algorithm can sometimes perform things based on cases.  
Like, for sometimes, the cases are so trivial that the algorithm might not need to take a recursion or an iteration. But sometimes it is so bad that it always has to go with the longest number of instructions possible.  
Point being, for every algorithm, there can be cases that for few inputs, it can work very fast and for few big inputs, it doesn’t work that fast.  
That is why, in the Asymptotic Analysis, we have the segregation about the best case, average case and worst case complexity.
