function pattern(n) {
  let spaces = n - 1;
  let stars = 1;
  
  for(let row = 1; row <= n; row++) {
    let str = "";
    
    for(let col = 1; col <= spaces; col++) {
      str += " ";
    }
    
    for(let col = 1; col <= stars; col++) {
      str += "*";
    }
    
    console.log(str);
    spaces--;
    stars += 2;
  }
}

pattern(5);
