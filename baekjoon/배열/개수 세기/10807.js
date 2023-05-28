const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const num = input[0].split(" ");
const limit = num[1];
const arr = input[1].split(" ");

let answer = [];
for (let i = 0; i < arr.length; i++) {
  if (Number(arr[i]) < limit) {
    answer += arr[i] + " ";
  }
}
console.log(answer);
