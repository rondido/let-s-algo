const path = require("path");
const filePath = path.join(__dirname, "memo6.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = Number(input);
let sum = 0;
let current = 0;

while (sum <= n) {
  current += 1;
  sum += current;
}

console.log(current - 1);
