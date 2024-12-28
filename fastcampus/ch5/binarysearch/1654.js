const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./1654.txt")
  .toString()
  .trim()
  .split("\n");

const [len, num] = input[0].split(" ").map(Number);

let arr = [];

for (let i = 1; i <= len; i++) {
  arr.push(Number(input[i]));
}

let start = 1;
let result = 0;
let end = arr.reduce((a, b) => Math.max(a, b));

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let lineNum = 0;
  for (let i = 0; i < len; i++) {
    lineNum += parseInt(arr[i] / mid);
  }
  if (lineNum < num) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
