const { input, numberToStringObject } = require("./input.js");

function partOne(inputArray) {
  let total = 0;

  inputArray.forEach((item) => {
    let foundFirst = false;
    let firstNumber;
    let lastNumber;

    for (let i = 0; i < item.length; i++) {
      const number = parseInt(item[i]);
      if (foundFirst === false && !isNaN(number)) {
        firstNumber = item[i];
        foundFirst = true;
      } else if (foundFirst === true && !isNaN(number)) {
        lastNumber = item[i];
      }
    }

    if (lastNumber === undefined) {
      lastNumber = firstNumber;
    }

    const concatNumber = firstNumber + lastNumber;
    const combinedNumber = parseInt(concatNumber, 10);
    total += combinedNumber;
  });

  return total;
}

function partTwo(inputArray) {
  let total = 0;
  let numRegex = /(?=(one|two|three|four|five|six|seven|eight|nine|[1-9]))/g;

  /*
  Use matchAll with capture group, negative lookahead to account for potentially overlapped numbers
  e.g. xtwone3four
  match => ["two", "3", "four"]
  matchAll => ["two", "one", "3" "four"]
  */

  inputArray.forEach((item) => {
    const matches = [...item.matchAll(numRegex)].map((m) => m[1]);
    let firstMatch = matches[0];
    let lastMatch = matches[matches.length - 1];

    let firstNumber;
    let lastNumber;

    if (isNaN(parseInt(firstMatch))) {
      firstNumber = numberToStringObject[firstMatch];
    } else {
      firstNumber = firstMatch;
    }

    if (isNaN(parseInt(lastMatch))) {
      lastNumber = numberToStringObject[lastMatch];
    } else {
      lastNumber = lastMatch;
    }

    const concatNumber = firstNumber + lastNumber;
    const combinedNumber = parseInt(concatNumber, 10);

    total += combinedNumber;
  });

  return total;
}

console.log("Part One: ", partOne(input));
console.log("Part Two: ", partTwo(input));
