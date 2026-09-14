function findGCD(num1, num2) {
  
  while(num1 % num2 !== 0) {
    let remainder = num1 % num2;
    num1 = num2;
    num2 = remainder;
  }
  
  return num2;
}

function findLCM(num1, num2) {
  let gcd = findGCD(num1, num2);
  
  return (num1 * num2) / gcd;
}

console.log(findLCM(9, 12)); // 36
