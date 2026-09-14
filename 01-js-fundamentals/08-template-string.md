# String Interpolation or Template Strings

Interpolated strings means we can embed expressions directly inside the string which will be evaluated during runtime.

```js
const name = "John";
const company = 'Amazon';
const years = 2;

console.log(`${name} works in ${company} for more than ${years} years.`);

console.log(`Interpolated string ${2 + 4 - 8}.`);
```
