const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const num = input[0];
const order = input[1];
const arr = [];
for (let i = 1; i <= num; i++) arr.push(i);
const answer = [];
let count = 1;
while (arr.length) {
  const shiftItem = arr.shift();
  if (count % order === 0) {
    answer.push(shiftItem);
  } else {
    arr.push(shiftItem);
  }
  count += 1;
}
console.log(`<${answer.join(", ")}>`);
