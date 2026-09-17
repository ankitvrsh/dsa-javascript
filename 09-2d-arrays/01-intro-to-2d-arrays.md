# Introduction to 2D Arrays

## Coding 2D Array in JS

```js
function get2DArray(rows, cols) {
  const outerArray = Array(rows);

  for(let index = 0; index < rows; index++) {
    const innerArray = Array(cols).fill(0);
    outerArray[index] = innerArray;
  }

  return outerArray;
}

const matrix = get2DArray(5, 6);
console.log(matrix);
```

## Shorthand for creating a 2D array

```js
function get2DArray(rows, cols) {
  return Array.from({ length: rows}, () => Array(cols).fill(0));
}

const matrix = get2DArray(5, 6);
console.log(matrix);
```
