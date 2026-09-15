function intersection(nums1, nums2) {
  const freqMap = {};
  const result = [];

  for(let num of nums1) {
    if(!freqMap[num]) {
      freqMap[num] = 1;
    }
  }

  for(let num of nums2) {
    if(freqMap[num]) {
      result.push(num);
      freqMap[num] = 0;
    }
  }

  return result;
}

const nums1 = [ 1, 2, 2, 1 ];
const nums2 = [ 2, 2 ];
console.log(intersection(nums1, nums2)); // [ 2 ]

// const nums1 = [ 4, 9, 5 ];
// const nums2 = [ 9, 4, 9, 8, 4 ];
// console.log(intersection(nums1, nums2)); // [ 9, 4 ]

// const nums1 = [ 2, 9, 1, 2, 2, 3, 9 ];
// const nums2 = [ 2, 1, 1, 7, 6, 8, 3 ];
// console.log(intersection(nums1, nums2)); // [ 2, 1, 3 ]
