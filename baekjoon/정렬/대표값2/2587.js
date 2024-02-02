const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const result = input.map((el) => +el);
const sorting = result.sort((a, b) => a - b);
let avg = 0;

for (let i = 0; i < result.length; i++) {
  avg += result[i] / 5;
}

console.log(avg);
console.log(sorting[2]);
