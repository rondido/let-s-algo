const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [stringNum, divider] = input;

let result = parseInt(stringNum, Number(divider));

console.log(result);
