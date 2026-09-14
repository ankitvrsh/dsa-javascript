function findSmallest(x, y, z) {
  if(x < y && x < z) {
    return x;
  } else if(y < z) {
    return y;
  } else {
    return z;
  }
}

console.log(findSmallest(1, 2, 3));
console.log(findSmallest(4, 1, 2));
