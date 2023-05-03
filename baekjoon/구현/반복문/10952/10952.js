const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = input.length - 2;

for (let i = 0; i < num; i++) {
  let result = input[i].split(" ");
  console.log(`${Number(result[0]) + Number(result[1])}`);
}
