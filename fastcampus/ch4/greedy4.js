const path = require("path");
const filePath = path.join(__dirname, "memo4.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let cnt = 0;
let flag = false;

while (n > 5) {
  if (n == 0 || n % 5 == 0) {
    cnt += parseInt(n / 5);
    console.log(cnt);
    flag = true;
    break;
  }
  n -= 3;
  cnt += 1;
}

if (!flag) {
  console.log(-1);
}
