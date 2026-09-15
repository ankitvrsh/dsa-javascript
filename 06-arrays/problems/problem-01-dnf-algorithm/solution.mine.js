function rearrange(nums) {
  let first = 0;
  
  while(first < nums.length && nums[first] != 1) {
    first++;
  }
  
  let last = first + 1;
  
  while(last < nums.length) {
    if(nums[last] == 0) {
      nums[first] = 0;
      nums[last] = 1;
      first++;
    }
    last++;
  }
}

let nums1 = [1,0,0,1,1,1,0,1,0,0,1];
rearrange(nums1);
console.log(nums1);

let nums2 = [0,0,0,1,1,1,0,1,0,0,1];
rearrange(nums2);
console.log(nums2);

let nums3 = [0,0,0,0,0,0];
rearrange(nums3);
console.log(nums3);

let nums4 = [1,1,1,1,1,1];
rearrange(nums4);
console.log(nums4);
