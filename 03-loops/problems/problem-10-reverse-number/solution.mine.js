function reverseNumber(num) {
  let ans = 0;
  
  while(num) {
    let lastDigit = num % 10;
    ans = ans * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  
  return ans;
}

console.log(reverseNumber(12345)); // 54321
