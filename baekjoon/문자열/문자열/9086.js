const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input.shift();

let stack = "";

for (let i = 0; i < num; i++) {
  let result = input[i].split("");
  stack += result[0];
  stack += result[result.length - 1];
  stack += "\n";
}

console.log(stack);
