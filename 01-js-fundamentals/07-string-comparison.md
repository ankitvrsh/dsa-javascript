# Facts on String Comparison

Below are the different ways of creating a string.

```js
let x = "abc"; // string or string literal
let y = "abc";

console.log(x == y); // true
console.log("abc" == "abc"); // true

let a = String("abc"); // string
let b = new String("abc"); // string object

console.log(a); // abc
console.log(b); // [String: 'abc']

console.log(a == x); // true
console.log(b == x); // true
console.log("abc" == new String("abc")); // true

console.log(typeof x); // string
console.log(typeof a); // string
console.log(typeof b); // object

console.log(a === x); // true
console.log(b === x); // false
console.log(a === b); // false
```

In case of Strict Equality, if the types are different, JS directly returns false.  
But in case of Abstract Equality, if the types are different, it tries to convert the types.

NOTE:  
Always keep in mind that when comparing different type of values, we should always keep an eye on how equality operator is working, what type of conversion it is trying to do and then come to a conclusion.
