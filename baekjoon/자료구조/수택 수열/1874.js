const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const len = Number(input.shift());

let answer = [];

let stack = [];

let stackNumber = 1;

for (let i = 0; i < len; i++) {
  let num = input[i];
  while (stackNumber <= num) {
    stack.push(stackNumber);
    answer.push("+");
    stackNumber++;
  }
  let popItem = stack.pop();
  if (popItem != num) {
    answer = ["NO"];
    break;
  }
  answer.push("-");
}
console.log(answer.join("\n"));
