const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(tree) {
  const obj = {};
  let total = 0;

  tree.forEach((v) => {
    if (!obj[v]) obj[v] = 0;
    obj[v] += 1;
    total += 1;
  });
  return Object.keys(obj)
    .sort()
    .map((v) => `${v} ${((obj[v] / total) * 100).toFixed(4)}`);
}

const answer = solution(input);
console.log(answer.join("\n"));
