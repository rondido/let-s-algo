const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let rank = input[0].split(" ").map((num) => +num);
let grade = input[1]
  .split(" ")
  .map((num) => +num)
  .sort((a, b) => b - a);

console.log(grade[rank[1] - 1]);
