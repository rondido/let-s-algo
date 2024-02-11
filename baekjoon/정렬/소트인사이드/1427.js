const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const sortingData = Number(
  input
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("")
);

console.log(sortingData);
