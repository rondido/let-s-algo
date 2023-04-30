const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const total = Number(input[0]);

const length = Number(input[1]);

let sum = 0;

for (let i = 2; i <= length + 1; i++) {
  let arr = input[i].split(" ").map((item) => Number(item));
  sum += arr[0] * arr[1];
}
total === sum ? console.log("Yes") : console.log("No");
