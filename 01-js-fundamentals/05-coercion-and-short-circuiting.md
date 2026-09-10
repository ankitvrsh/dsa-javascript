# Coercion and Short Circuiting

What values are falsy in JS?

```text
null
undefined
“”
+0
-0
NaN
false
```

Rest everything is a truthy value.

There is a concept of Coercion or Type Interconversion in JS.  
There are a lot of rules of Coercion which are written inside the documentation.

```js
console.log(10 && 6); // 6
```

In the above code, why we get the output as 6 and not 10?

## Short Circuiting

In case of AND operator, if the first input value is false, JS doesn’t evaluate the second input value and directly returns the first input value as second input value doesn’t matter.  
If the first input value is true, then the second input value has to be evaluated and the second input value is returned.  
This concept is called as Short Circuiting.

```js
console.log((10 > 6) && (6 < 7)); // true
```

In the above code, we are not getting output as (6 < 7) because this is an expression and it can be simplified after evaluation.

```js
console.log(6 && 10); // 10
```

In case of OR operator, if the first input value is false, JS evaluates the second input value and returns the second input value.  
If the first input value is true, then JS doesn’t evaluate the second input value and immediately returns the first input value.

```js
console.log(10 || 0); // 10
console.log(6 || 19); // 6
console.log(0 || -0); // -0
```
