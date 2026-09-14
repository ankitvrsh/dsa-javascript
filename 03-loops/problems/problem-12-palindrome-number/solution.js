function isNumberPalindrome(number) {
  const numberString = "" + number;
  let startIndex = 0;
  let endIndex = numberString.length - 1;
  
  while(startIndex < endIndex) {
    if(numberString[startIndex] !== numberString[endIndex]) {
      return false;
    }
    startIndex++;
    endIndex--;
  }
  
  return true;
}

console.log(isNumberPalindrome(1234)); // false
console.log(isNumberPalindrome(14641)); // true
