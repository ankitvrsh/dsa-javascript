# Map Function

## map function example

```js
function square(element) {
    return element * element;
}

const arr = [1,2,3,4,5];

const result = arr.map(square);

console.log(result); // [ 1, 4, 9, 16, 25 ]
```

## Getting indexes with map function

```js
function printElement(element, index) {
    return `Element at index ${index} is ${element}`;
}

const arr = [9,8,7,6,5];
const result = arr.map(printElement);

console.log(result);
```

The above are two different use-cases of map function, where:

- We are getting the element as the first argument in the passed function.
- We are getting the element as the first argument and its index as the second argument in the passed function.

We can take a look at different use-cases of map() function in the MDN Docs.
