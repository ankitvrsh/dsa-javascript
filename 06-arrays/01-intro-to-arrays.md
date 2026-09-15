# Introduction to Arrays

Arrays can be described as a data structure that can store collection of data in a linear contiguous orientation in the memory.  
JS arrays supports heterogenous values.

## Data Structure

These are different structures that we can prepare to store data in different ways depending on our use case.

## Array indexing and comparison with strings

We cannot update a value present at a particular index in a string.  
But we can do the same in arrays.  
That’s why, strings in JS are immutable.  
And arrays in JS are mutable.

```js
let str = "hello";

str[0] = "j";
console.log(str); // hello
```

The above code snippet will not throw any errors.

NOTE:  
Initialising an array of some size with some values.

```js
let array = Array(10).fill(0);
```
