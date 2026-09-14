function isPrimeNumber(num) {
  if(num == 1) {
    return false;
  }
  
  for(let div = 2; div <= num / 2; div++) {
    if(num % div == 0) {
      return false;
    }
  }
  
  return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(5));
console.log(isPrimeNumber(6));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(8));
console.log(isPrimeNumber(9));
console.log(isPrimeNumber(10));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));
