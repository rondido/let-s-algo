const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = [];

const answer = [];
let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < input.length; i++) {
  arr.push(Number(input[i]));
}

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
answer.push(max);
answer.push(arr.indexOf(max) + 1);
console.log(answer.join("\n"));
