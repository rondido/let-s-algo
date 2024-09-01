const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[0].split(" ").map(Number);

arr.sort((a, b) => {
  return a - b;
});

let answer = "";

for (a of arr) {
  answer += a + " ";
}

console.log(answer);
