/**
 * In this solution, we are sorting the array directly.
 * 
 * Here, we have tried to solve the Two Sum problem by sorting the array first directly and then using two pointer approach.
 * In this case, we might be getting wrong result because the array elements indexes are changed because of sorting.
 * 
 * NOTE:
 * In the Two Sum II Problem, the input array is already sorted, so that problem can be solved easily by this approach 
 * as we don’t need to remember the old-indexes because the array is already sorted there.
 */

function comparatorFn(x, y) {
  return x - y;
}

function twoSum(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  arr.sort(comparatorFn);

  while(start < end) {
    let pairSum = arr[start] + arr[end];

    if(pairSum === target) {
      return [start, end];
    } else if(pairSum < target) {
      start++;
    } else {
      end--;
    }
  }
}

const arr = [2, 7, 11, 15];
console.log(twoSum(arr, 9));
