const path = require("path");
const filePath = path.join(__dirname, "memo8.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

let dist = input[1].split(" ").map(Number);
let cost = input[2].split(" ").map(Number);

let minCost = cost[0];
// 2 3 1
// [5,2,4,1]=> [5,2,2,1]
for (let i = 0; i < n; i++) {
  minCost = Math.min(minCost, cost[i]);
  cost[i] = minCost;
}

//도로당 이동 비용의 합 계산
let answer = BigInt(0);
for (let i = 0; i < n - 1; i++) {
  answer += BigInt(dist[i]) * BigInt(cost[i]);
}

console.log(String(answer));
