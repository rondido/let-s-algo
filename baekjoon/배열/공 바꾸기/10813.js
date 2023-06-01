const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map((el) => el);

const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(i);
}

for (let i = 0; i < m; i++) {
  let [n, m] = input[i + 1].split(" ").map((el) => el);
  let temp = arr[n - 1];
  arr[n - 1] = arr[m - 1];
  arr[m - 1] = temp;
}

console.log(arr.join(" "));
