function findLCM(num1, num2) {
  let mutiplier = 2;
  
  while((num1 * mutiplier) % num2 !== 0) {
    mutiplier++;
  }
  
  return num1 * mutiplier;
}

console.log(findLCM(9, 12)); // 36
