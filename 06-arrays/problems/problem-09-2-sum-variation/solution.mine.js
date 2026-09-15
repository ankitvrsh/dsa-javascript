function twoSum(nums, target) {
  const map = {};
  let totalPairs = 0;

  for(let num of nums) {
    if(map[num] === undefined) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }

  for(let key in map) {
    let num = Number(key);
    let diff = target - num;

    if(map[diff] !== undefined) {
      if(diff === num) {
        const freq = map[diff];
        totalPairs += ((freq * (freq - 1)) / 2);
      } else {
        totalPairs += (map[num] * map[diff]);
      }

      map[diff] = 0;
    }
  }

  return totalPairs;
}

const nums = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6]; // 11
// const nums = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6]; // 13
console.log(twoSum(nums, 8));
