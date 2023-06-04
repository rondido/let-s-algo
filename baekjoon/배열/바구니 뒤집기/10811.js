const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map((el) => el);

const basket = [];

for (let i = 1; i <= n; i++) {
  basket.push(i);
}

for (let i = 1; i <= m; i++) {
  const [n, m] = input[i].split(" ").map((el) => el);
  let arr = [];
  for (let j = n - 1; j < m; j++) {
    arr.push(basket[j]);
  }
  arr.reverse();
  basket.splice(n - 1, m - n + 1, ...arr);
}

console.log(basket.join(" "));
