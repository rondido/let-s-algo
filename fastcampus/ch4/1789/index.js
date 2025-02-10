const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

let len = Number(input);
let answer = 1;
let sum = 0;
while (sum <= len) {
  answer++;
  sum += answer;
}

console.log(answer - 1);
