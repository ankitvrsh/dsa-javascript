/**
 * Better than my solution.
 */

function majorityElement(nums) {
  let currentPossibleMajority = 0;
  let frequency = 0;

  for(let num of nums) {
    if(frequency === 0) {
      currentPossibleMajority = num;
    }
    if(num === currentPossibleMajority) {
      frequency++;
    } else {
      frequency--;
    }
  }

  return currentPossibleMajority;
}

const nums = [ 3, 2, 3 ]; // 3
// const nums = [ 2, 2, 1, 1, 1, 2, 2 ]; // 2
console.log(majorityElement(nums));
