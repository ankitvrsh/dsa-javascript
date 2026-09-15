/**
 * NOTE:
 * We can convert our original array something like below to keep a track of the original indices.
 * Original Array : [ 2, 9, 13, 6, 8, 7, 5 ]
 * Transformed Array : [ [2, 0], [9, 1], [13, 2], [6, 3], [8, 4], [7, 5], [5, 6] ]
 * 
 * Below is a more optimized solution than brute-force as we are using array transformation and sorting the array.
 */

function comparatorFn(x, y) {
  return x[0] - y[0];
}

function transformArray(arr) {
  for(let index = 0; index < arr.length; index++) {
    arr[index] = [arr[index], index];
  }
}

function twoSum(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  transformArray(arr);
  arr.sort(comparatorFn);

  while(start < end) {
    let pairSum = arr[start][0] + arr[end][0];

    if(pairSum === target) {
      return [arr[start][1], arr[end][1]];
    } else if(pairSum < target) {
      start++;
    } else {
      end--;
    }
  }
}

const arr = [2, 7, 11, 15];
console.log(twoSum(arr, 9));
