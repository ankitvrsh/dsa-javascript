/**
 * This solution will not work in case of rectangular arrays.
 */

function transpose(matrix) {
  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < row; col++) {
      const tempValue = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = tempValue;
    }
  }

  console.log(matrix);
}

const matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
transpose(matrix); // [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]
