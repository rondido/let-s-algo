const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = Number(input);

let star = "";

for (let i = 1; i < num; i++) {
  let jump = " ".repeat(num - i);
  let star = "*".repeat(i + (i - 1));
  console.log(jump + star);
}

for (let j = num; j > 0; j--) {
  let jump = " ".repeat(num - j);
  let star = "*".repeat(j + (j - 1));
  console.log(jump + star);
}
