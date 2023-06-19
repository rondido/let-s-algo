const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input.shift();

const arr = input.map((el) => +el);
let stack = [];

for (let i = 0; i < num; i++) {
  if (arr[i] === 0) {
    stack.pop();
  } else {
    stack.push(arr[i]);
  }
}
let answer = stack.length ? stack.reduce((acc, v) => acc + v, 0) : 0;
console.log(answer);
