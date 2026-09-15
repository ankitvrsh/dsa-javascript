function pattern(n) {
  let stars = ((n-1)/2) + 1;
  let spaces = 1;
  
  for(let row = 1; row <= n; row++) {
    let str = "";
    
    for(let col = 1; col <= stars; col++) {
      str += "*";
    }
    
    for(let col = 1; col <= spaces; col++) {
      str += " ";
    }
    
    for(let col = 1; col <= stars; col++) {
      str += "*";
    }
    
    console.log(str);
    
    if(row < n/2) {
      stars--;
      spaces += 2;
    } else {
      stars++;
      spaces -= 2;
    }
  }
}

pattern(7);
