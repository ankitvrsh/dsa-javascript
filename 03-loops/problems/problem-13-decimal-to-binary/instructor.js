function getBinaryString(number) {
  let binaryString = "";
  
  while(number) {
    if(number % 2 == 0) {
      binaryString = "0" + binaryString;
    } else {
      binaryString = "1" + binaryString;
    }
    
    number = Math.floor(number / 2);
  }
  
  return binaryString;
}

console.log(getBinaryString(7)); // 111
console.log(getBinaryString(19)); // 10011
