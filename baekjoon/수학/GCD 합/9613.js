const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const T = input.splice(1);
const answer = [];

T.forEach((v) => {
  const N = v[0];
  const nums = v.splice(1);
  let sum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum += GCD(nums[i], nums[j]);
    }
  }
  answer.push(sum);
});

console.log(answer.join("\n"));

function GCD(a, b) {
  if (b == 0) return a;
  return a > b ? GCD(b, a % b) : GCD(a, b % a);
}
