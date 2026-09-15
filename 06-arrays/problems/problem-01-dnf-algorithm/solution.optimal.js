function separateZerosAndOnes(nums) {
  let i = 0;
  let j = nums.length - 1;
  
  while(i < nums.length && nums[i] != 1) {
    i++;
  }
  while(j > 0 && nums[j] != 0) {
    j--;
  }
  
  while(i < j) {
    if(nums[i] == 0) {
      i++;
    } else {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j--;
    }
  }
}

let nums = [1,0,0,1,1,1,0,1,0,0,1];
separateZerosAndOnes(nums);
console.log(nums);
