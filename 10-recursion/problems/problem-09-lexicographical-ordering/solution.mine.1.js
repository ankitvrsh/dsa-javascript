/**
 * Very bad, don’t know how its working, just took so much time in writing this.
 */

function lexicalOrder(num, n) {
  if(num > n) {
    return;
  }

  let maxcount = Math.floor(num / 10) === 0 ? 8 : 9;
  for(let count = 0; count <= maxcount; count++) {
    if(num + count <= n) {
      console.log(num + count);
      lexicalOrder((num + count) * 10, n);
    }
  }
}

lexicalOrder(1, 14);
