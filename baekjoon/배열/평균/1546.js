const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input[0] * 1;

const [...arr] = input[1].split(" ");

let max = Math.max(...arr);
let sum = 0;

for (let i = 0; i < num; i++) {
  sum += (arr[i] / max) * 100;
}

console.log(sum / num);
