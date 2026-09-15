function pattern(n) {
  let digits = 1;
  
  for(let row = 1; row <= ((2*n)+1); row++) {
    let str = "";
    let digit = n;
    
    for(let col = 1; col <= digits; col++) {
      str += digit;
      digit--;
    }
    
    console.log(str);
    
    if(row <= n) {
      digits++;
    } else {
      digits--;
    }
  }
}

pattern(5);
