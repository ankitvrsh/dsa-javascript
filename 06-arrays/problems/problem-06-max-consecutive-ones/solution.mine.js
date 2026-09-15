function findMaxConsecutiveOnes(nums) {
  let maxFrequency = 0;
  let currFrequency = 0;

  for(let num of nums) {
    if(num === 1) {
      currFrequency++;
    } else {
      maxFrequency = Math.max(maxFrequency, currFrequency);
      currFrequency = 0;
    }
  }

  maxFrequency = Math.max(maxFrequency, currFrequency);

  return maxFrequency;
}

// const nums = [1, 1, 0, 1, 1, 1];
const nums = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums));
