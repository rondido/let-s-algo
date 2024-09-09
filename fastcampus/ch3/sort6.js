const path = require("path");
const filePath = path.join(__dirname, "memo6.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

let data = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  data.push([x, y]);
}

function compare(a, b) {
  if (a[1] != b[1]) return a[0] - b[0];
  else return a[0] - b[0];
}

data.sort(compare);

let answer = "";
for (let num of data) {
  answer += num[0] + " " + num[1] + "\n";
}

console.log(answer);
