const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);

let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => {
  return a - b;
});

const answer = arr[k - 1];

console.log(answer);
