const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

let arr = [];

let visited = Array(n).fill(false);

let selected = [];

let answer = "";

for (let i = 1; i <= n; i++) arr.push(i);

function dfs(arr, depth) {
  if (depth === m) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    selected.push(i);
    visited = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);

console.log(answer);
