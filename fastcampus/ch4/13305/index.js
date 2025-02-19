const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const len = Number(input[0]);

let dist = input[1].split(" ").map(Number);

let cost = input[2].split(" ").map(Number);

// 주유 비용(cost) 배열의 값을 비오름차순이 되도록 변환
// [5,2,4,1] -> [5,2,2,1]

let minCost = cost[0];
for (let i = 0; i < len; i++) {
  minCost = Math.min(minCost, cost[i]);

  cost[i] = minCost;
}

let answer = BigInt(0);
for (let i = 0; i < len - 1; i++) {
  answer += BigInt(dist[i]) * BigInt(cost[i]);
}

console.group(String(answer));
