function displayGridRowWise(grid) {
  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[row].length; col++) {
      console.log(grid[row][col]);
    }
  }
}

const grid = [ 
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
];

displayGridRowWise(grid);
