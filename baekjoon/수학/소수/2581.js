const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

const [n, m] = input;

let answer = [];

function isPrame(num) {
  if (num == 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return;
  }
  return answer.push(num);
}

for (let i = n; i <= m; i++) {
  isPrame(i);
}

if (answer.length === 0) {
  console.log(-1);
} else {
  console.log(answer.reduce((acc, v) => acc + v, 0));
  console.log(Math.min(...answer));
}
