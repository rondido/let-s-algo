const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let result = input[i].split(" ");
  console.log(`Case #${i}: ${Number(result[0]) + Number(result[1])}`);
}
