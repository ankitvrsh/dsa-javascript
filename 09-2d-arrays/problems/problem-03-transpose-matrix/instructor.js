/**
 * In this solution, we are reading input matrix row by row and filling output matrix column by column.
 */

function transpose(matrix) {
  const transposedMatrix = Array.from({length: matrix[0].length}, () => Array(matrix.length).fill(0));

  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[row].length; col++) {
      transposedMatrix[col][row] = matrix[row][col];
    }
  }

  return transposedMatrix;
}

// const matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
const matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ] ];
console.log(transpose(matrix)); // [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
