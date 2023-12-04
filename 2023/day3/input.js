const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .toString()
  .split("\n")
  .map((line) => line.split(""));

const symbols = ["@", "#", "$", "%", "&", "*", "+", "=", "-", "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function isDigit(value) {
  return /[0-9]/g.test(value);
}

function isSymbol(value) {
  return !/[0-9]|\./g.test(value);
}

module.exports = {
  input,
  symbols,
  isDigit,
  isSymbol,
};
