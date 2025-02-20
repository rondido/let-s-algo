const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number); // 모든 풍선의 높이
let answer = 0;

let arrow = new Array(10001).fill(0); // 각 높이에 화살이 몇개 있는지

for (let x of arr) {
  // 해당 높이에 화살이 있다면
  if (arrow[x] > 0) {
    arrow[x] -= 1;
    arrow[x - 1] += 1;
  } else {
    // 해당 높이에 화살이 없다면
    arrow[x - 1] += 1;
    answer += 1; //화살쏘기
  }
}
console.log(answer);
