const path = require("path");
const filePath = path.join(__dirname, "memo5.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [start, end] = input[0].split(" ").map(Number);
let flag = false;
let cnt = 1;

while (start <= end) {
  if (start == end) {
    flag = true;
    break;
  }
  if (end % 2 === 0) end = parseInt(end / 2);
  else if (end % 10 === 1) end = parseInt(end / 10);
  else break;
  cnt++;
}

if (flag) console.log(cnt);
else console.log(-1);
