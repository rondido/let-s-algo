const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[0].split("");

const num = Number(input[1]);

for (let i = 0; i < arr.length; i++) {
  if (i === num - 1) {
    console.log(arr[i]);
  }
}
