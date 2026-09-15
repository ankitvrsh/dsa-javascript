function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function separateZerosAndOnes(nums) {
  let i = 0;
  let j = nums.length - 1;
  
  while(i < j) {
    if(nums[i] == 0) {
      i++;
    } else {
      swap(nums, i, j);
      j--;
    }
  }
}

let nums = [1,0,0,1,1,1,0,1,0,0,1];
separateZerosAndOnes(nums);
console.log(nums);
