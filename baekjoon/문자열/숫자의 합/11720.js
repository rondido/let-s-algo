const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input.shift();

const arrNum = input[0].split("").map((el) => +el);

let sum = 0;

for (let i = 0; i < num; i++) {
  sum += arrNum[i];
}

console.log(sum);
