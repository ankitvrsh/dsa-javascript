function factorialWithLoops(n) {
  let factorial = 1;

  for(let num = 1; num <= n; num++) {
    factorial *= num;
  }

  return factorial;
}

console.log(factorialWithLoops(5)); // 120
console.log(factorialWithLoops(4)); // 24
