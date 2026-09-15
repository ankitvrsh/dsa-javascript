function pattern(n) {
  let stars = 1;
  let spaces = n - 2;
  
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
    
    if(row == Math.floor(n/2) + 1) {
      str += "*";
    }
    
    console.log(str);
    
    if(row == Math.floor(n/2)) {
      spaces -= 2;
    } else if(row == Math.floor(n/2) + 1) {
      spaces += 2;
    } else if(row < n/2) {
      spaces -= 2;
      stars++;
    } else {
      spaces += 2;
      stars--;
    }
  }
}

pattern(7);
