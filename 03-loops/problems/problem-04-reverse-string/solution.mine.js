function reverseString(str) {
  let reversed = "";
  let index = str.length - 1;

  while(index >= 0) {
    reversed += str[index];
    index--;
  }

  return reversed;
}

console.log(reverseString("rainbow"));
console.log(reverseString("apples"));
