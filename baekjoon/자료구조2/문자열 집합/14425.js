const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ");
const stringArr = new Set(input.slice(1, +n + 1));

const quest = input.slice(+n + 1, input.length);
let count = 0;
for (let i = 0; i < quest.length; i++) {
  if (stringArr.has(quest[i])) count += 1;
}

console.log(count);
