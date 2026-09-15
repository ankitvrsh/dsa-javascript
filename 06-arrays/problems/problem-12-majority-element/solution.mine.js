/**
 * Gist of the below approach:
 * We have more than n/2 occurrences of the majority element.
 * Means, if we cancel out majority and non-majority elements, we will still be left with majority elements in the array 
 * because their count is more than n/2.
 * That way, we can find it out and return the same as our answer.
 */

function majorityElement(nums) {
  let element = 0;
  let frequency = 0;

  for(let num of nums) {
    if(num === element) {
      frequency++;
    } else {
      if(frequency) {
        frequency--;
      } else {
        element = num;
        frequency = 1;
      }
    }
  }

  return element;
}

// const nums = [ 3, 2, 3 ]; // 3
const nums = [ 2, 2, 1, 1, 1, 2, 2 ]; // 2
console.log(majorityElement(nums));
