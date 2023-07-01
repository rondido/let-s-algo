const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);
const [num, k] = input;

const stack = [];

for (let i = 1; i <= num; i++) {
  if (num % i === 0) stack.push(i);
}
if (stack.length < k) {
  console.log(0);
} else {
  console.log(stack[k - 1]);
}
