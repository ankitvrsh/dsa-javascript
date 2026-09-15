function pattern(n) {
  let spaces = n-1;
  let digits = 1;
  
  for(let row = 1; row <= n; row++) {
    let str = "";
    let digit = 1;
    
    for(let col = 1; col <= spaces; col++) {
      str += " ";
    }
    
    for(let col = 1; col <= digits; col++) {
      str += digit;
  
      if(col < row) {
        digit++;
      } else {
        digit--;
      }
    }
    
    console.log(str);
    spaces--;
    digits += 2;
  }
}

pattern(4);
