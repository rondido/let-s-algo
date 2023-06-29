const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let cases = input.shift();
let answer = [];
for (let i = 0; i < cases; i++) {
  let x = Number(input[i].split(" ")[0]);
  let y = Number(input[i].split(" ")[1]);
  let common = gcd(x, y);
  answer.push((x * y) / common);
}

function gcd(a, b) {
  let tmp;
  while (b != 0) {
    tmp = a % b;
    [a, b] = [b, tmp];
  }
  return a;
}
console.log(answer.join("\n").trim());
