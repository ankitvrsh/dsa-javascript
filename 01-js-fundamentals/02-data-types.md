# Data Types in JS (Primitive and Non-Primitive Data Types)

What all things we can store in JS?

number  
string  
boolean  
undefined ⇒ Something not defined yet but maybe defined later.  
objects ⇒ If we have to somehow store key-value pairs, then we can use objects.

There are two types of data-types:

Primitive data types: Types which are atomic in nature.  
Ex: number

Non-primitive data types: Types which are a composition of other types.  
Ex: object

null and undefined, both of them gives a sense of emptiness.  
null actually represents empty value.  
undefined is a value that has not been given a value yet, not even an empty value.  
Empty can also be considered as a value, like nothing.

paper-roll example:

```text
non-zero value: paper-roll stand + paper-roll + paper
zero: paper-roll stand + paper-roll
null: paper-roll stand
undefined: nothing is present
```

There are two data types to give the sense of emptiness in JS, i.e. null and undefined.

```js
var marks = 100;
var name = "John";
var age;
var company = null;
var salary = undefined;
var isStudent = false;

// undefined example
let a;

// null example
let b = 10;
b = null;
```
