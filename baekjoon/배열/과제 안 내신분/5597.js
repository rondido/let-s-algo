const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const inputNumber = input.map(Number);

const arr = Array.from({ length: 30 }, (v, i) => i + 1);

let abc = arr
  .filter((x) => !inputNumber.includes(x))
  .sort(function (a, b) {
    return a - b;
  });

console.log(abc.join("\n"));
