function printSubarrays(nums) {
  const subarrays = [];

  for(let start = 0; start < nums.length; start++) {
    for(let end = start; end < nums.length; end++) {
      const subarray = [];

      for(let index = start; index <= end; index++) {
        subarray.push(nums[index]);
      }

      subarrays.push(subarray);
    }
  }

  return subarrays;
}

const nums = [ 1, 2, 3, 4 ];
console.log(printSubarrays(nums));
