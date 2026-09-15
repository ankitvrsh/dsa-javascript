/**
 * Here, we are polluting our original array by making the elements negative.
 */

function findDisappearedNumbers(nums) {
  const disappearedNumbers = [];

  for(let num of nums) {
    if(nums[Math.abs(num) - 1] > 0) {
      nums[Math.abs(num) - 1] *= -1;
    }
  }

  for(let index = 0; index < nums.length; index++) {
    if(nums[index] > 0) {
      disappearedNumbers.push(index + 1);
    }
  }

  return disappearedNumbers;
}

// const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const nums = [1, 1];
console.log(findDisappearedNumbers(nums));
