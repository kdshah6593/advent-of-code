const { input, symbols, isDigit, isSymbol } = require("./input.js");

function partOne(lines) {
  const allNumStrs = [];

  const finalLineIdx = lines.length - 1;

  // iterate through each line
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const finalCharIdx = line.length - 1;

    let currentNum = "";
    let nearSymbol = false;

    // iterate through each character
    for (let j = 0; j < line.length; j++) {
      const character = line[j];

      if (isDigit(character)) {
        currentNum += character; // concatentate to string

        // get all the surrounding characters
        let lud = "";
        let u = "";
        let rud = "";
        let l = "";
        let r = "";
        let ldd = "";
        let d = "";
        let rdd = "";

        if (i === 0 && j === 0) {
          r = lines[i][j + 1];
          d = lines[i + 1][j];
          rdd = lines[i + 1][j + 1];
        } else if (i === finalLineIdx && j === finalCharIdx) {
          lud = lines[i - 1][j - 1];
          u = lines[i - 1][j];
          l = lines[i][j - 1];
        } else if (i === 0) {
          l = lines[i][j - 1];
          r = lines[i][j + 1];
          ldd = lines[i + 1][j - 1];
          d = lines[i + 1][j];
          rdd = lines[i + 1][j + 1];
        } else if (j === 0) {
          u = lines[i - 1][j];
          rud = lines[i - 1][j + 1];
          r = lines[i][j + 1];
          d = lines[i + 1][j];
          rdd = lines[i + 1][j + 1];
        } else if (i === finalLineIdx) {
          lud = lines[i - 1][j - 1];
          u = lines[i - 1][j];
          rud = lines[i - 1][j + 1];
          l = lines[i][j - 1];
          r = lines[i][j + 1];
        } else if (j === finalCharIdx) {
          lud = lines[i - 1][j - 1];
          u = lines[i - 1][j];
          l = lines[i][j - 1];
          ldd = lines[i + 1][j - 1];
          d = lines[i + 1][j];
        } else {
          lud = lines[i - 1][j - 1];
          u = lines[i - 1][j];
          rud = lines[i - 1][j + 1];
          l = lines[i][j - 1];
          r = lines[i][j + 1];
          ldd = lines[i + 1][j - 1];
          d = lines[i + 1][j];
          rdd = lines[i + 1][j + 1];
        }

        // check if any of the surrounding characters are symbols
        if (
          isSymbol(lud) ||
          isSymbol(u) ||
          isSymbol(rud) ||
          isSymbol(l) ||
          isSymbol(r) ||
          isSymbol(ldd) ||
          isSymbol(d) ||
          isSymbol(rdd)
        ) {
          nearSymbol = true;
        }
      } else {
        // when we hit a non-digit, if we have a number and one of the numbers has a symbol adjacent, keep that number
        if (currentNum !== "" && nearSymbol === true) {
          allNumStrs.push(currentNum);
        }

        currentNum = ""; // reset the current number
        nearSymbol = false; // reset if number is near symbol
      }
    }
  }
  console.log(allNumStrs);

  const allNums = allNumStrs.map((numStr) => parseInt(numStr));
  return allNums.reduce((acc, curr) => acc + curr, 0);
}

// console.log(partOne(input));
console.dir(partOne(input), { maxArrayLength: null });
