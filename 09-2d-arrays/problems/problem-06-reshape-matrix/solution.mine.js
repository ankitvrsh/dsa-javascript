function matrixReshape(matrix, rows, cols) {
  if(matrix.length * matrix[0].length !== rows * cols) {
    return matrix;
  }

  const result = Array.from({length: rows}, () => Array(cols).fill(0));
  let orgRow = 0;
  let orgCol = 0;

  for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
      result[row][col] = matrix[orgRow][orgCol];
      orgCol++;

      if(orgCol === matrix[0].length) {
        orgRow++;
        orgCol = 0;
      }
    }
  }

  return result;
}

const matrix = [ [ 1, 2 ], [ 3, 4 ] ];
console.log(matrixReshape(matrix, 1, 4)); // [ [ 1, 2, 3, 4 ] ]

// const matrix = [ [ 1, 2 ], [ 3, 4 ] ];
// console.log(matrixReshape(matrix, 2, 4)); // [ [ 1, 2 ], [ 3, 4 ] ]
