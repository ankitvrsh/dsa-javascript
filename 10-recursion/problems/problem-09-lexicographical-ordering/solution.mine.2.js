/**
 * After getting Sir’s approach, I coded myself.
 * 
 * Gist of below solution:
 * f(i, n)
 * It prints all the numbers in the range [i, n] starting with i in the lexicographical order.
 */

function lexicalOrder(currNum, n, result) {
  if(currNum > n) {
    return;
  }

  if(currNum != 0) {
    result.push(currNum);
  }

  const adderStart = currNum == 0 ? 1 : 0;

  for(let adder = adderStart; adder < 10; adder++) {
    lexicalOrder((currNum * 10) + adder, n, result);
  }
}

const result = [];
lexicalOrder(0, 14, result);
console.log(result);
