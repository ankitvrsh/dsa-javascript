const mp = {
  "A": "X",
  "B": "0"
};

function winCheck(grid, player) {
  if(grid[0][0] === mp[player] && grid[0][1] === mp[player] && grid[0][2] === mp[player]) {
    return true;
  }
  if(grid[1][0] === mp[player] && grid[1][1] === mp[player] && grid[1][2] === mp[player]) {
    return true;
  }
  if(grid[2][0] === mp[player] && grid[2][1] === mp[player] && grid[2][2] === mp[player]) {
    return true;
  }

  if(grid[0][0] === mp[player] && grid[1][0] === mp[player] && grid[2][0] === mp[player]) {
    return true;
  }
  if(grid[0][1] === mp[player] && grid[1][1] === mp[player] && grid[2][1] === mp[player]) {
    return true;
  }
  if(grid[0][2] === mp[player] && grid[1][2] === mp[player] && grid[2][2] === mp[player]) {
    return true;
  }

  if(grid[0][0] === mp[player] && grid[1][1] === mp[player] && grid[2][2] === mp[player]) {
    return true;
  }
  if(grid[0][2] === mp[player] && grid[1][1] === mp[player] && grid[2][0] === mp[player]) {
    return true;
  }

  return false;
}

function tictactoe(moves) {
  const rows = 3;
  const cols = 3;
  const grid = Array.from({length: rows}, () => Array(cols).fill(" "));
  let turn = 0;
  let movesCount = 0;

  for(let index = 0; index < moves.length; index++) {
    let [row, col] = moves[index];
    let player = turn === 0 ? "A" : "B";
    let move = mp[player];

    if(grid[row][col] === " ") {
      grid[row][col] = move;
    }

    movesCount++;

    if(winCheck(grid, player)) {
      return player;
    }
    if(movesCount === rows * cols) {
      return "Draw";
    }

    turn = (turn + 1) % 2;
  }

  return "Pending";
}

const moves = [ [ 0, 0 ], [ 2, 0 ], [ 1, 1 ], [ 2, 1 ], [ 2, 2 ] ]; // "A"
// const moves = [ [ 0, 0 ], [ 2, 0 ], [ 1, 1 ], [ 2, 1 ], [ 0, 2 ] ]; // "Pending"
// const moves = [ [ 0, 0 ], [ 1, 1 ], [ 0, 1 ], [ 0, 2 ], [ 1, 0 ], [ 2, 0 ] ]; // "B"
// const moves = [ [ 0, 0 ], [ 1, 1 ], [ 2, 0 ], [ 1, 0 ], [ 1, 2 ], [ 2, 1 ], [ 0, 1 ], [ 0, 2 ], [ 2, 2 ] ]; // "Draw"
console.log(tictactoe(moves));
