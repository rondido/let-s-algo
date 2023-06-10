const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const first = input[0].split("").reverse().join("");
const second = input[1].split("").reverse().join("");
console.log(Math.max(first, second));
