function fibonacciWithLoops(n) {
  if(n == 0 || n == 1) {
    return n;
  }

  let secondLastFibonacci = 0;
  let lastFibonacci = 1;
  let currentFibonacci;

  for(let index = 2; index <= n; index++) {
    currentFibonacci = secondLastFibonacci + lastFibonacci;
    secondLastFibonacci = lastFibonacci;
    lastFibonacci = currentFibonacci;
  }

  return currentFibonacci;
}

console.log(fibonacciWithLoops(0));
console.log(fibonacciWithLoops(1));
console.log(fibonacciWithLoops(2));
console.log(fibonacciWithLoops(3));
console.log(fibonacciWithLoops(4));
console.log(fibonacciWithLoops(5));
console.log(fibonacciWithLoops(6));
