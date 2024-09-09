const path = require("path");
const filePath = path.join(__dirname, "memo5.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);

let data = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  data.push([x, y]);
}

function compare(a, b) {
  if (a[0] != b[0]) return a[0] - b[0]; //x 좌표 기준 오름 차순
  else return a[1] - b[1]; // x가 같으면 y좌표 기준 오름차순
}

data.sort(compare);

let answer = "";
for (let point of data) {
  answer += point[0] + " " + point[1] + "\n";
}
console.log(answer);
