function getBinaryNumber(number) {
  let binaryNumber = 0;
  let multiplier = 1;
  
  while(number) {
    const remainder = number % 2;
    binaryNumber = remainder * multiplier + binaryNumber;
    multiplier *= 10;
    number = Math.floor(number / 2);
  }
  
  return binaryNumber;
}

console.log(getBinaryNumber(7)); // 111
console.log(getBinaryNumber(19)); // 10011
