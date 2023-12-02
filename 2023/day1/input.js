const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .toString()
  .split("\n");

const numberToStringObject = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

module.exports = {
  input,
  numberToStringObject,
};
