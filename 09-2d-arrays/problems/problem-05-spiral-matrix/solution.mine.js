/**
 * Some enhancements by Instructor’s code, like if checks.
 */

function spiralOrder(matrix) {
  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;
  let result = [];
  const totalElements = matrix.length * matrix[0].length;

  while(result.length < totalElements) {
    for(let col = startCol; col <= endCol; col++) {
      result.push(matrix[startRow][col]);
    }
    
    if(result.length === totalElements) break;
    startRow++;

    for(let row = startRow; row <= endRow; row++) {
      result.push(matrix[row][endCol]);
    }

    if(result.length === totalElements) break;
    endCol--;

    for(let col = endCol; col >= startCol; col--) {
      result.push(matrix[endRow][col]);
    }

    if(result.length === totalElements) break;
    endRow--;

    for(let row = endRow; row >= startRow; row--) {
      result.push(matrix[row][startCol]);
    }

    if(result.length === totalElements) break;
    startCol++;
  }

  return result;
}

const matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]; // [ 1, 2, 3, 6, 9, 8, 7, 4, 5 ]
// const matrix = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ]; // [ 1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7 ]
console.log(spiralOrder(matrix));
