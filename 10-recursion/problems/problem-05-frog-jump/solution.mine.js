/**
 * NOTE:
 * Structured code little bit by taking idea from instructor’s solution.
 */

function frogJump(heights, stone) {
  if(stone == heights.length - 1) {
    return 0;
  }
  if(stone == heights.length - 2) {
    return Math.abs(heights[stone] - heights[stone + 1]) + frogJump(heights, stone + 1);
  }

  return Math.min(
    Math.abs(heights[stone] - heights[stone + 1]) + frogJump(heights, stone + 1),
    Math.abs(heights[stone] - heights[stone + 2]) + frogJump(heights, stone + 2)
  );
}

const heights = [ 10, 30, 40, 20 ]; // 30
// const heights = [ 10, 10 ]; // 0
// const heights = [ 30, 10, 60, 10, 60, 50 ]; // 40
console.log(frogJump(heights, 0));
