function singleNumber(nums) {
  let result = 0;

  for(let num of nums) {
    result ^= num;
  }

  return result;
}

const nums = [ 2, 2, 1 ]; // 1
// const nums = [ 4, 1, 2, 1, 2 ]; // 4
// const nums = [ 1 ]; // 1
console.log(singleNumber(nums));
