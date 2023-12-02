const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .toString()
  .split("\n");

const cubeColorToCountObject = {
  red: "12",
  green: "13",
  blue: "14",
};

module.exports = {
  input,
  cubeColorToCountObject,
};
