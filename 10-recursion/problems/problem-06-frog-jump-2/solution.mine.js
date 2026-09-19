function frogJump2(heights, stone, k) {
  if(stone == heights.length - 1) {
    return 0;
  }

  let minCost = Infinity;

  for(let jump = 1; jump <= k; jump++) {
    if(stone + jump < heights.length) {
      const currentJumpCost = Math.abs(heights[stone] - heights[stone + jump]);
      minCost = Math.min(minCost, currentJumpCost + frogJump2(heights, stone + jump, k));
    }
  }

  return minCost;
}

const heights = [ 10, 30, 40, 50, 20 ];
console.log(frogJump2(heights, 0, 3)); // 30

// const heights = [ 10, 20, 10 ];
// console.log(frogJump2(heights, 0, 1)); // 20
