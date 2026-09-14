function printFibonacciSeries(n) {
  if(n >= 0) {
    console.log(0);
  }
  if(n >= 1) {
    console.log(1);
  }
  
  let secondLastFib = 0;
  let lastFib = 1;
  
  for(let i = 2; i <= n; i++) {
    let currentFib = secondLastFib + lastFib;
    secondLastFib = lastFib;
    lastFib = currentFib;
    console.log(currentFib);
  }
}

printFibonacciSeries(5); // 0 1 1 2 3 5
