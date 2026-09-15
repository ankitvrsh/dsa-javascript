/**
 * We don’t need extra while loop for copying nums1 array elements using i index again.
 * Check by submitting the code on leetcode.
 */

function mergeSorted(nums1, nums2, m, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while(i >= 0 && j >= 0) {
    if(nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while(j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

mergeSorted(nums1, nums2, nums1.length - nums2.length, nums2.length);

console.log(nums1);
