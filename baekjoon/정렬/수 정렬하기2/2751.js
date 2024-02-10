const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const len = input.shift();

let sortingData = input.sort((a, b) => a - b);
console.log(sortingData.join("\n"));
