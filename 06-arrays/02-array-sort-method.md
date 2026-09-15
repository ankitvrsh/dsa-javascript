# Array.sort() method

There is a higher order function with arrays called as sort().  
This sort() function expects a function fn as the input.  
This sort() function can arrange array elements in a particular order based on this input function fn.

This fn function takes two arguments: x and y.  
While sorting the array elements using sort() function, whether x will come before y or x will come after y, this fact will be determined by the fn function.  
This fn function is also called as a comparator function.

## How comparator function works?

If we are comparing two elements x and y and the result of the comparator function is negative.  
Then it is going to put the first element before the second element (x, y).  
If the result is positive, then it will put second element before the first element (y, x).

```text
CONSIDERING BOTY X AND Y ARE NUMBERS:

Case-1: (x - y)
x < y => x - y => negative => (x, y)
x > y => x - y => positive => (y, x)

Case-2: (y - x)
x < y => y - x => positive => (y, x)
x > y => y - x => negative => (x, y)
```

If we don’t pass the comparator function and directly call the sort() function, it will arrange the array elements in dictionary / lexicographical order.

```js
const array = [2, 4, 3, 30, 40, 1, 10, 100];

array.sort();

console.log(array); // [ 1, 10, 100, 2, 3, 30, 4, 40 ]
```
