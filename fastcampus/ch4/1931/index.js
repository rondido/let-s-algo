const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const len = Number(input[0]);

let arr = [];
for (let i = 1; i <= len; i++) {
  let data = input[i].split(" ").map(Number);
  arr.push(data);
}

arr.sort(function (a, b) {
  if (a[1] != b[1]) a[1] - b[1];
  else return a[0] - b[0];
});

let cnt = 1,
  cur = 0;

for (let i = 0; i < len; i++) {
  if (arr[cur][1] <= arr[i][0]) {
    cur = i;
    cnt += 1;
  }
}

console.log(cnt);
