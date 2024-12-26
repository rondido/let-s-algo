const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./2805.txt")
  .toString()
  .trim()
  .split("\n");

let [m, n] = input[0].split(" ").map(Number);

let arr = input[1].split(" ").map(Number);

let start = 0;
let end = input[1].split(" ").reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (x of arr) {
    if (x > mid) total += Math.abs(x - mid);
  }
  if (total < n) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
