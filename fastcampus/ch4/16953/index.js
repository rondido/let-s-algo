const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

let [n, m] = input.split(" ").map(Number);
let flag = false;
let answer = 1;

while (n <= m) {
  if (n == m) {
    flag = true;
    break;
  }
  if (m % 2 === 0) m = parseInt(m / 2);
  else if (m % 10 === 1) m = parseInt(m / 10);
  else break;
  answer++;
}
if (flag) console.log(answer);
else console.log(-1);
