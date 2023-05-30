const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map((el) => el);

const arr = new Array(n);

for (let i = 1; i <= m; i++) {
  let [n, m, k] = input[i].split(" ").map((el) => el);
  for (n; n <= m; k++) {
    arr[n - 1] = k;
  }
}

for (let j = 0; j < arr.length; j++) {
  typeof arr[j] === "undefined" ? arr[j] === 0 : arr[j];
}

console.log(arr.join(" "));
