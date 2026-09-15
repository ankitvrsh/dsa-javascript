/**
 * This is done using strings.
 */

function diamondPattern(n) {
  let rows = 2 * n - 1;
  let startingNum = 1;
  let nums = n;
  let blanks = 0;

  for(let row = 1; row <= rows; row++) {
    let pattern = "";

    for(let col = 1; col <= blanks; col++) {
      pattern += " ";
    }

    for(let col = 1; col <= nums; col++) {
      pattern += `${startingNum + col - 1} `;
    }

    if(row < n) {
      startingNum++;
      blanks++;
      nums--;
    } else {
      startingNum--;
      blanks--;
      nums++;
    }

    console.log(pattern);
  }
}

diamondPattern(7);
