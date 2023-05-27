const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const num = Number(input[2]);
let count = 0;
const answer = input[1].split(" ").map((value) => {
  return Number(value);
});

for (let i = 0; i < answer.length; i++) {
  if (answer[i] === num) {
    count += 1;
  }
}

console.log(count);
