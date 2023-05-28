const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const num = Number(input[0]);
const arr = [];

for (let i = 0; i <= num; i++) {
  arr.push(i);
}

console.log(count);
