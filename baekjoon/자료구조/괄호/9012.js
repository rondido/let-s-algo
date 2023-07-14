const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const len = input.shift();

const stack = [];

for (let i = 0; i < len; i++) {
  let cnt = 0;
  for (let x of input[i]) {
    cnt += x === "(" ? 1 : -1;
    if (cnt < 0) break;
  }
  stack.push(cnt === 0 ? "YES" : "NO");
}
console.log(stack.join("\n"));
