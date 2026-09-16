# Object Methods

```js
const x = {
    name: "John",
    company: "Microsoft",
    salary: 4000000,
    age: 24,
    city: "Bengaluru",
    team: "Azure Storage",
    designation: "Software Engineer"
};

const keysOfX = Object.keys(x); // returns an array of keys of x
const valuesOfX = Object.values(x); // returns an array of values of x
const entriesOfX = Object.entries(x); // returns an array of arrays of key-value pairs of x

console.log(keysOfX);
console.log(valuesOfX);
console.log(entriesOfX);

for(const entry of Object.entries(x)) {
    console.log(entry);
}

// for in loop helps us loop over keys of an object
for(const key in x) {
    console.log(key, x[key]);
}
```
