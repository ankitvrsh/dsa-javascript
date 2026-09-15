function twoSum(nums, target) {
  const map = {};

  for(let index = 0; index < nums.length; index++) {
    let num = nums[index];
    let diff = target - num;

    if(map[diff] !== undefined) {
      return [map[diff], index];
    } else {
      map[num] = index;
    }
  }
}

const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));
