/**
 * Slight variation in further function calls.
 */

function lexicalOrder(currNum, n, result) {
  if(currNum != 0) {
    result.push(currNum);
  }

  const adderStart = currNum == 0 ? 1 : 0;

  for(let adder = adderStart; adder < 10; adder++) {
    const nextCallNum = (currNum * 10) + adder;

    if(nextCallNum <= n) {
      lexicalOrder((currNum * 10) + adder, n, result);
    }
  }
}

const result = [];
lexicalOrder(0, 1400, result);
console.log(result);
