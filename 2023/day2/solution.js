const { input, cubeColorToCountObject } = require("./input.js");

function partOne(inputArray) {
  let gameIdSum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    // index starts at 0, game count starts at 1
    const gameId = i + 1;
    let isValidGame = true;

    const gameInput = inputArray[i];
    // remove the game text and grab the set string
    const gameSetsStr = gameInput.split(": ")[1];
    // split the sets
    const gameSets = gameSetsStr.split("; ");

    gameSets.forEach((gameSet) => {
      // split a set into individual cube color counts
      const colorCountsArr = gameSet.split(", ");

      // split each cube and count and
      // put all the indivdual cube color counts into 1 array
      const countToColor = colorCountsArr.map((c) => c.split(" "));

      countToColor.forEach((cc) => {
        const count = cc[0];
        const color = cc[1];
        if (parseInt(count) > parseInt(cubeColorToCountObject[color])) {
          isValidGame = false;
        }
      });
    });

    if (isValidGame === true) gameIdSum += gameId;
  }

  return gameIdSum;
}

function partTwo(inputArray) {
  let total = 0;

  // iterate through each game
  for (let i = 0; i < inputArray.length; i++) {
    const gameInput = inputArray[i];
    let maxRed = 0;
    let maxGreen = 0;
    let maxBlue = 0;

    // remove the game text and grab the set string
    const gameSetsStr = gameInput.split(": ")[1];

    // split the sets
    const gameSets = gameSetsStr.split("; ");

    gameSets.forEach((gameSet) => {
      // split a set into individual cube color counts
      const colorCountsArr = gameSet.split(", ");

      // split each cube and count and
      // put all the indivdual cube color counts into 1 array
      const countToColor = colorCountsArr.map((c) => c.split(" "));

      countToColor.forEach((cc) => {
        const count = parseInt(cc[0]);
        const color = cc[1];
        if (color === "red" && count > maxRed) {
          maxRed = count;
        } else if (color === "green" && count > maxGreen) {
          maxGreen = count;
        } else if (color === "blue" && count > maxBlue) {
          maxBlue = count;
        }
      });
    });

    const product = maxRed * maxGreen * maxBlue;
    total += product;
  }

  return total;
}

console.log(partOne(input));
console.log(partTwo(input));
