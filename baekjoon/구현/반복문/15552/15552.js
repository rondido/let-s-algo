const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const num = Number(input[0]);

let total = "";

for (let i = 1; i <= num; i++) {
  let num = input[i].split(" ");
  total += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(total);
