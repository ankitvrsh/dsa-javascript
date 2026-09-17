/**
 * Solve it again as I took so much time in thinking properly and solving.
 */

function getGridFromMoves(moves, rows, cols) {
  const grid = Array.from({length: rows}, () => Array(cols).fill(" "));

  for(let index = 0; index < moves.length; index++) {
    let [row, col] = moves[index];

    if(index % 2 === 0) {
      grid[row][col] = "X";
    } else {
      grid[row][col] = "0";
    }
  }

  return grid;
}

function tictactoe(moves) {
  const grid = getGridFromMoves(moves, 3, 3);
  const rowWinners = Array(grid.length);
  const colWinners = Array(grid[0].length);
  const playerMoveMappings = {
    "X": "A",
    "0": "B"
  };
  let remainingMoves = 0;
  let firstDiagWinner = grid[0][0];
  let secondDiagWinner = grid[0][grid[0].length - 1];

  rowWinners[0] = grid[0][0];
  colWinners[0] = grid[0][0];

  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[row].length; col++) {
      if(row === 0) {
        colWinners[col] = grid[row][col];
      } else if(col === 0) {
        rowWinners[row] = grid[row][col];
      }

      if(rowWinners[row] !== grid[row][col]) {
        rowWinners[row] = "N";
      }
      if(colWinners[col] !== grid[row][col]) {
        colWinners[col] = "N";
      }

      if(row === col && grid[row][col] !== firstDiagWinner) {
        firstDiagWinner = "N";
      }
      if(row + col === grid.length - 1 && grid[row][col] !== secondDiagWinner) {
        secondDiagWinner = "N";
      }

      if(grid[row][col] === " ") {
        remainingMoves++;
      }
    }
  }

  for(let index = 0; index < rowWinners.length; index++) {
    if(rowWinners[index] !== "N" && rowWinners[index] !== " ") {
      return playerMoveMappings[rowWinners[index]];
    }
  }

  for(let index = 0; index < colWinners.length; index++) {
    if(colWinners[index] !== "N" && colWinners[index] !== " ") {
      return playerMoveMappings[colWinners[index]];
    }
  }

  if(firstDiagWinner !== "N" && firstDiagWinner !== " ") {
    return playerMoveMappings[firstDiagWinner];
  }
  if(secondDiagWinner !== "N" && secondDiagWinner !== " ") {
    return playerMoveMappings[secondDiagWinner];
  }

  if(remainingMoves) {
    return "Pending";
  }

  return "Draw";
}

const moves = [ [ 0, 0 ], [ 2, 0 ], [ 1, 1 ], [ 2, 1 ], [ 2, 2 ] ]; // "A"
// const moves = [ [ 0, 0 ], [ 2, 0 ], [ 1, 1 ], [ 2, 1 ], [ 0, 2 ] ]; // "Pending"
// const moves = [ [ 0, 0 ], [ 1, 1 ], [ 0, 1 ], [ 0, 2 ], [ 1, 0 ], [ 2, 0 ] ]; // "B"
// const moves = [ [ 0, 0 ], [ 1, 1 ], [ 2, 0 ], [ 1, 0 ], [ 1, 2 ], [ 2, 1 ], [ 0, 1 ], [ 0, 2 ], [ 2, 2 ] ]; // "Draw"
console.log(tictactoe(moves));
