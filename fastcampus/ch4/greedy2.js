const path = require("path");
const filePath = path.join(__dirname, "memo2.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);

let time = [
  ...input[1]
    .toString()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b),
];

let answer = 0;
let summary = 0;
for (let i = 0; i < n; i++) {
  summary += time[i];
  console.log(summary);
  answer += summary;
}
console.log(answer);
