function swap(array, firstIndex, secondIndex) {
  const tempValue = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = tempValue;
}

function reverseArray(array) {
  let start = 0;
  let end = array.length - 1;

  while(start < end) {
    swap(array, start, end);
    start++;
    end--;
  }
}

const array = [1, 2, 3, 4, 5];
reverseArray(array);
console.log(array);
