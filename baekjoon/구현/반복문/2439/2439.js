const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

for (let i = 0; i < num; i++) {
  let result = "";
  for (let j = num - 1; j >= 0; j--) {
    result += j <= i ? "*" : " ";
  }
  console.log(result);
}
