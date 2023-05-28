const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arr = input[1].split(" ");

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
  if (Number(arr[i]) > max) {
    max = arr[i];
  }
  if (Number(arr[i]) < min) {
    min = arr[i];
  }
}
console.log(min, max);
