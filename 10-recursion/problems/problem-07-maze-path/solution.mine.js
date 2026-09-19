function mazePath(row, col, rows, cols) {
  if(row == rows && col == cols) {
    return 1;
  }
  if(row == rows + 1 || col == cols + 1) {
    return 0;
  }

  return mazePath(row, col + 1, rows, cols) + mazePath(row + 1, col, rows, cols);
}

console.log(mazePath(1, 1, 3, 3)); // 6
