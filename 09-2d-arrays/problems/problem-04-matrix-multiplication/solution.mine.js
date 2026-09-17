function multiply(first, second) {
  const rows = first.length;
  const cols = second[0].length;
  const repeater = second.length;
  const result = Array.from({length: rows}, () => Array(cols).fill(0));

  for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
      for(let index = 0; index < repeater; index++) {
        result[row][col] += (first[row][index] * second[index][col]);
      }
    }
  }

  return result;
}

const first = [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] ];
const second = [ [ 1, 1, 1 ], [ 2, 2, 2 ] ];
console.log(multiply(first, second)); // [ [ 3, 3, 3 ], [ 6, 6, 6 ], [ 9, 9, 9 ] ]
