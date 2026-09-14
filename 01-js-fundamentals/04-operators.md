# Operators

Operand is a value on which we want to do the operation.

There are different types of operators.

## Arithmetic Operators

```text
+   : addition
-   : subtraction
*   : multiplication
/   : division
%   : remainder
**  : exponent
```

```js
let x = 3;

console.log(x ** 2); // 9
console.log(x ** 3); // 27

// a^b = a ** b
```

## Assignment Operators

```text
=
+=
-=
*=
/=
%=
**=

a **= b means a = a ** b
```

## Relational Operators OR Comparison Operators

```text
<
>
≤
≥
```

```js
let x = 10;
let y = 20;
let z = 5;
let a = 10;

console.log(x < z); // false
console.log(y > z); // true
console.log(x <= z); // false
console.log(x >= a); // true
```

## Logical Operators

### AND

```text
X      |      Y     |   X AND Y
false       false       false
true        false       false
false       true        false
true        true        true
```

### OR

```text
X       |     Y     |   X OR Y
false       false       false
false       true        true
true        false       true
true        true        true
```

### NOT

```text
X       |   Output
true        false
false       true
```

```js
console.log(~(3 > 4)); // -1
console.log(~true); // -2
```

`TODO :: Learn about (~) operator used above.`

## Bitwise Operators

Bitwise operators perform the corresponding operation bit by bit on the given operand.

```text
& : Bitwise AND
| : Bitwise OR
^ : Bitwise XOR
~ : Bitwise NOT
```

### 5 & 7

Bitwise AND will not work on 5 and 7.  
It will work on the binaries of 5 and 7.

```text
5       :   1 0 1
7       :   1 1 1
5 & 7   :   1 0 1

5 & 7   :   5
```

```text
5       :   0 1 0 1
6       :   0 1 1 0
5 | 6   :   0 1 1 1

5 | 6   :   7
```

## Abstract and Strict Equality Operators

### Abstract Equality Operator (==)

It checks the type of both operands.  
If types are same, then it calls Strict Equality Operator (===).  
If types are not same, then type conversion occurs (coercion) and then comparison is done.

### Strict Equality Operator (===)

It also checks the types of both the operands.  
If types are different, it returns false.  
If types are same, then value comparison happens.

Major difference between == and ===  
== actually does type conversion whereas === will never do type conversion.

Example:

```text
=> 1 == "1"
=> 1 == 1
=> 1 === 1
=> true
```

`TODO :: Read the whole thing from documentation.`

## typeof Operator

To check the type of a particular value, we have an operator called as typeof.

```js
console.log(typeof "1"); // string
console.log(typeof 1); // number
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined
```

There is a corner case here, which is technically a historical mistake of JS.

```js
console.log(typeof null); // object
```

Technically, type of null should be null.  
Because null is a different data type.  
They are not correcting it because it will hamper a lot of codebase which is already been written in JS.

## Unary Operator

An operator which requires only one operand.

```text
++ : unary increment
-- : unary decrement
+  : unary plus
```

```text
a++ : Postfix unary addition
++a : Prefix unary addition
```

### Unary Plus

It tries to convert the value into a number, if it is not already a number.  
Ex: +x

It doesn’t change the original operand but instead returns a converted value.

```js
let x = "22";
let y = +x;

console.log(typeof y); // number
```

NOTE:  
type of the x variable will remain same, i.e. string.

### Unary Minus

It also converts the operand to a number, but always negate the result.

```js
let x = "22";
let y = -x;

console.log(typeof y); // number
console.log(y); // -22
```

```js
let x = "-22";
let y = -x;

console.log(y); // 22
```

NOTE:  
If Unary Plus and Unary Minus are not able to convert the given string to a valid number, they will return an invalid number, i.e. NaN.

### More Unary Operators

```text
! : Logical NOT
typeof
```

## Ternary Operators

```text
? :
```

```js
console.log(1 < 2 ? "1 is less than 2" : "1 is greater than 2");
```

### If else vs Ternary Operators

If the if else conditional logic is simple and can be written in a single line, ternary operator is a good way to write those conditions. Ternary operator is a cleaner implementation of simple if else blocks.
