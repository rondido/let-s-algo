const path = require("path");
const filePath = path.join(__dirname, "memo1.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);

let money = [];

for (let i = 1; i <= n; i++) {
  money.push(Number(input[i]));
}

let answer = 0;

for (let i = n - 1; i >= 0; i--) {
  answer += parseInt(k / money[i]);
  k %= money[i];
}

console.log(answer);
