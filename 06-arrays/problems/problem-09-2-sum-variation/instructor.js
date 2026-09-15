/**
 * In this solution, we have used Two Pointers approach.
 * 
 * NOTE:
 * If there are n balls in a bag and we want to get all the pairs of 2 unique balls, 
 * then the mathematical formula to calculate it is:
 * nC2 = (n * (n - 1)) / 2
 */

function twoSum(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let totalPairs = 0;

  while(start < end) {
    const pairSum = nums[start] + nums[end];

    if(pairSum === target) {
      if(nums[start] === nums[end]) {
        const freq = end - start + 1;
        totalPairs += ((freq * (freq - 1)) / 2);
        return totalPairs;
      } else {
        let startNumFreq = 1;
        let endNumFreq = 1;

        start++;
        end--;
        
        while(nums[start] === nums[start - 1]) {
          start++;
          startNumFreq++;
        }

        while(nums[end] === nums[end + 1]) {
          end--;
          endNumFreq++;
        }

        totalPairs += (startNumFreq * endNumFreq);
      }
    } else if(pairSum < target) {
      start++;
    } else {
      end--;
    }
  }

  return totalPairs;
}

const nums = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 6]; // 10
// const nums = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 6, 7, 8]; // 11
// const nums = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6]; // 11
// const nums = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6]; // 13
console.log(twoSum(nums, 8));
