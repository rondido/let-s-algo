const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./2512.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0].split(" ")[0]); //지방의 수N
let arr = input[1].split(" ").map(Number); //각 지방의 예산 요청
let m = Number(input[2]); //총 예산

let start = 1; // 이진 탐색의 시작
let end = input[2].split(" ").reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of arr) {
    total += Math.min(mid, x);
  }
  if (total <= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);
