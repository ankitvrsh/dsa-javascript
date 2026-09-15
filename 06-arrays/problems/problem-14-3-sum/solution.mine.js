/**
 * NOTE:
 * Solution is not correct.
 * Need to make it correct and do it again later.
 */

function twoSumTransformed(nums, target) {
  const pairs = [];
  const freqMap = {};

  for(let num of nums) {
    let diff = target - num;

    if(freqMap[diff]) {
      pairs.push([num, diff]);
    } else {
      freqMap[num] = 1;
    }
  }

  return pairs;
}

function threeSum(nums) {
  const triplets = [];
  const map = {};

  for(let num of nums) {
    if(!map[num]) {
      const pairs = twoSumTransformed(nums, num * -1);

      for(let pair of pairs) {
        triplets.push([num, ...pair]);
      }

      map[num] = 1;
    }
  }

  return triplets;
}

const nums = [ -1, 0, 1, 2, -1, -4 ];
console.log(threeSum(nums, 0));
