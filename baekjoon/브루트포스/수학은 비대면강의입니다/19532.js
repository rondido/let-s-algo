const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const result = input[0].split(" ").map((el) => +el);
const [a, b, c, d, e, f] = result;
const min = -999;
const max = 999;
for (let i = min; i <= max; i++) {
  for (let j = min; j <= max; j++) {
    x = i;
    y = j;
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(`${i} ${j}`);
    }
  }
}
