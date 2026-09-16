# Introduction to Objects

```js
const x = {
    name: "John",
    age: 24
}
const y = {
    name: "Alicia",
    age: 25
}
let key = "age";

console.log(x["name"]); // John
console.log(x[key]); // 24
console.log(y.name); // Alicia
console.log(y["age"]); // 25

x.name = "Alex";
console.log(x); // { name: 'Alex', age: 24 }
```

Why we cannot access a key from a value?  
In an object, keys are unique, but multiple different keys can have same values.

## Add or remove key-value pairs

For deleting a key-value pair from an object, we can use delete operator along with Object.key

```js
const x = {
    name: "Alex",
    age: 24
}

delete x.name;
console.log(x); // { age: 24 }
```
