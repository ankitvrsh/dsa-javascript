/**
 * My solution creates only one frequency map.
 */

function intersection(nums1, nums2) {
  const freqMapNums1 = {};
  const freqMapNums2 = {};

  for(let num of nums1) {
    if(freqMapNums1[num]) {
      freqMapNums1[num]++;
    } else {
      freqMapNums1[num] = 1;
    }
  }

  for(let num of nums2) {
    if(freqMapNums1[num]) {
      freqMapNums2[num] = 1;
    }
  }

  return Object.keys(freqMapNums2);
}

const nums1 = [ 1, 2, 2, 1 ];
const nums2 = [ 2, 2 ];
console.log(intersection(nums1, nums2)); // [ '2' ]

// const nums1 = [ 4, 9, 5 ];
// const nums2 = [ 9, 4, 9, 8, 4 ];
// console.log(intersection(nums1, nums2)); // [ '4', '9' ]

// const nums1 = [ 2, 9, 1, 2, 2, 3, 9 ];
// const nums2 = [ 2, 1, 1, 7, 6, 8, 3 ];
// console.log(intersection(nums1, nums2)); // [ '1', '2', '3' ]
