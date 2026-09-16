# Introduction to Higher Order Functions

These are functions that depends and operates on other functions.  
Higher order functions take another function as an argument or return a function and then execute the logic.

```js
function gun() {
    console.log("executing gun");
}

function fun(gun) {
    console.log("executing fun");
    gun();
}

fun(gun);
```

In the above code snippet, fun() is a higher order function.

```js
typeof [1,2,3]; // object
```

Arrays are also objects (custom objects / modified objects) in JS.  
Index of the element is the key and the element itself is the value.

```text
["abc", "def", "ghi"] => { 0: "abc", 1: "def", 2: "ghi" }
```
