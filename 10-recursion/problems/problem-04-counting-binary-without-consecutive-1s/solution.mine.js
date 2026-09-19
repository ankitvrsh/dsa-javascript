function countBinary(n) {
  if(n == 0) {
    return 0;
  }
  if(n == 1 || n == 2) {
    return n + 1;
  }

  return countBinary(n-1) + countBinary(n-2);
}

console.log(countBinary(0)); // 0
console.log(countBinary(1)); // 2
console.log(countBinary(2)); // 3
console.log(countBinary(3)); // 5
console.log(countBinary(4)); // 8
