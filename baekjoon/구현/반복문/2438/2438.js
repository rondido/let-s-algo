const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

let result = "";
for (let i = 1; i <= num; i++) {
  result += "*";
  console.log(result);
}
