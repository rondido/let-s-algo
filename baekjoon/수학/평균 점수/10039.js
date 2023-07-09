const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let count = 0;

input.map((i) => {
  if (i < 40) i = 40;
  count += i;
});

console.log(parseInt(count / 5));
