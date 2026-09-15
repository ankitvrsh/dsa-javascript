function printSubarrays(nums) {
  for(let start = 0; start < nums.length; start++) {
    let subarray = "";

    for(let end = start; end < nums.length; end++) {
      subarray += `${nums[end]} `;
      console.log(subarray);
    }
  }
}

const nums = [ 1, 2, 3, 4 ];
printSubarrays(nums);
