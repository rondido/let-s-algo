const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

const [stringNum, divider] = input;

let result = stringNum.toString(divider).toUpperCase();
console.log(result);
