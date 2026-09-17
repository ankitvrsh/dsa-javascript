function getGridColumnWise(grid) {
  let str = "";

  for(let col = 0; col < grid[0].length; col++) {
    if(col % 2 === 0) {
      for(let row = 0; row < grid.length; row++) {
        str += `${grid[row][col]} `;
      }
    } else {
      for(let row = grid.length - 1; row >= 0; row--) {
        str += `${grid[row][col]} `;
      }
    }
  }

  console.log(str);
}

const grid = [ 
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ],
  [ 17, 18, 19, 20 ]
];

getGridColumnWise(grid);
