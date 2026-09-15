/**
 * Optimised after seeing instructor’s solution.
 * 
 * NOTE: Do it again.
 */

function printSubarrays(nums) {
  const subarrays = [];

  for(let start = 0; start < nums.length; start++) {
    const subarray = [];

    for(let end = start; end < nums.length; end++) {
      subarray.push(nums[end]);
      subarrays.push([...subarray]);
    }
  }

  return subarrays;
}

const nums = [ 1, 2, 3, 4 ];
console.log(printSubarrays(nums));
