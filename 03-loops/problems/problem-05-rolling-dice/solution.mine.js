function rollingDice(targetNum) {
  let rolls = 0;

  while(true) {
    const rolledNum = Math.floor(Math.random() * 6) + 1;

    rolls++;
    console.log("Roll #" + rolls + " : " + rolledNum);

    if(rolledNum == targetNum) {
      console.log("Target number rolled !");
      break;
    }
  }
}

rollingDice(4);
