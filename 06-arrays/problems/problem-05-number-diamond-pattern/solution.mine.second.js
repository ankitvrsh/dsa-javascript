/**
 * In this, we have created a 2D matrix and then printing it.
 */

function diamondPattern(n) {
  const matrix = Array.from({ length: 2 * n - 1 }, () => Array(n).fill(0));
  let blanks = 0;
  let startingNum = 1;

  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[row].length; col++) {
      if(col >= blanks) {
        matrix[row][col] = startingNum + col - blanks;
      }
    }

    if(row < n - 1) {
      blanks++;
      startingNum++;
    } else {
      blanks--;
      startingNum--;
    }
  }

  return matrix;
}

function displayPattern(matrix) {
  for(let row = 0; row < matrix.length; row++) {
    let pattern = "";

    for(let col = 0; col < matrix[row].length; col++) {
      if(matrix[row][col]) {
        pattern += `${matrix[row][col]} `;
      } else {
        pattern += " ";
      }
    }

    console.log(pattern);
  }
}

const matrix = diamondPattern(7);
displayPattern(matrix);
