const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, m] = input;
let stack = [];
let count = 0;
let prime;
let nth;
for (let i = 2; i <= n; i++) {
  stack.push(i);
}

while (count < m) {
  prime = stack[0];
  stack.some((v) => {
    if (v % prime === 0) {
      stack.splice(stack.indexOf(v), 1);
      nth = v;
      count++;
    }
    if (count === m) return true;
  });
}

console.log(nth);
