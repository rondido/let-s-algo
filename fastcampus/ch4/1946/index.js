// x를 기준으로 오름차순 정렬
// y의 값이 이전 사원들보다 등수가 낮아야 사원으로 채용 가능하다.
// 1 2
// 2 1
// 3 4
// 2명 채용

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let testCase = Number(input[0]);

let line = 1;
for (let tc = 0; tc < testCase; tc++) {
  n = Number(input[line]); // 5
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(" ").map(Number);
    arr.push(data);
  }
  arr.sort((x, y) => x[0] - y[0]);
  let count = 0;
  let minValue = 100001;
  for (let [x, y] of arr) {
    if (y < minValue) {
      minValue = y;
      count += 1;
    }
  }
  console.log(count);
  line += n + 1;
}
