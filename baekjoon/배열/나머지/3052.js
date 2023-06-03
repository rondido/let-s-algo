const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const arr = input.map((v) => Number(v));
let count;

let answer = [];

for (let i = 0; i < arr.length; i++) {
  answer.push(arr[i] % 42);
}
count = answer.filter((v, i) => answer.indexOf(v) === i).length;
console.log(count);
