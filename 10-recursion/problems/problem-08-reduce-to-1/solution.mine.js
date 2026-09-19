function reduceToOne(n) {
  if(n == 1) {
    return 0;
  }
  if(n < 1) {
    return Infinity;
  }

  let minSteps = Infinity;

  if(n % 3 == 0) {
    minSteps = Math.min(minSteps, reduceToOne(n / 3));
  }
  if(n % 2 == 0) {
    minSteps = Math.min(minSteps, reduceToOne(n / 2));
  }
  minSteps = Math.min(minSteps, reduceToOne(n - 1));

  return minSteps + 1;
}

console.log(reduceToOne(10)); // 3
