function fibonacciSequence(countOfTerms) {
  if(countOfTerms == 0) {
    return [];
  }
  if(countOfTerms == 1) {
    return [0];
  }

  let secondLastNum = 0;
  let lastNum = 1;
  let sequence = [secondLastNum, lastNum];

  while(sequence.length < countOfTerms) {
    const currentNum = lastNum + secondLastNum;
    
    sequence.push(currentNum);
    secondLastNum = lastNum;
    lastNum = currentNum;
  }

  return sequence;
}

console.log(fibonacciSequence(0));
console.log(fibonacciSequence(1));
console.log(fibonacciSequence(2));
console.log(fibonacciSequence(3));
console.log(fibonacciSequence(4));
console.log(fibonacciSequence(10));
