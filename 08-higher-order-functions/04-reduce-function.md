# Reduce Function

Reduce is a higher order function available for arrays.  
Reduce also takes a function f as an argument.  
Reduce function one by one goes to every element of the array, say the current element is arr[i], reduce will pass this element to the function f and accumulate the result of further function calls with this particular result.

```js
const arr = [1, 2, 3, 4, 5];

function sum(prevResult, currValue) {
    console.log(prevResult, currValue);
    return prevResult + currValue;
}

const result = arr.reduce(sum);
console.log(result);
```

## Example to study

```js
const arr = [1];

function sum(prevResult, currValue) {
    console.log(prevResult, currValue);
    return prevResult + currValue;
}

const result = arr.reduce(sum);
console.log(result); // 1
```

## Real life example of reduce function (Mine)

```js
let cart = [
    {name: "Iphone", price: 50000},
    {name: "Backcover", price: 5000},
    {name: "Tempered Glass", price: 500}
];

const totalAmount = cart.reduce((prevTotal, currItem) => {
    // console.log(prevTotal, currItem);
    return prevTotal + currItem.price;
}, 0);

console.log(totalAmount);
```

## Real life example of reduce function (Instructor)

```js
let cart = [
    {name: "Iphone", price: 50000},
    {name: "Backcover", price: 5000},
    {name: "Tempered Glass", price: 500}
];

const totalAmount = cart.reduce((prevTotal, currItem) => {
    const currTotal = prevTotal.price + currItem.price;
    return {price: currTotal};
});

console.log(totalAmount.price);
```
