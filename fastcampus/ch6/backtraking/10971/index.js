const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let graph = []; // 전체 그래프 정보 입력
for (let i = 0; i <= n; i++) graph.push([0]);

for (let i = 1; i <= n; i++) {
  line = input[i].split(" ").map(Number);
  for (let j = 0; j < n; j++) graph[i].push(line[j]);
}

let visited = new Array(11).fill(false);

let result = [];
let minValue = 1e9;

dfs(0);

console.log(minValue);

function dfs(depth) {
  if (depth == n - 1) {
    //현재 순열에 대한 처리
    let totalCase = 0; //1번 노드에서 출발
    let cur = 1; // 1번 노드에서 출발
    for (let i = 0; i < n - 1; i++) {
      // 현재 순열에 따라서 노드 이동
      let nextNode = result[i]; // 다음 이동 노드까지의 비용 계산
      let cost = graph[cur][nextNode];
      if (cost == 0) return; // 이동 불가능하면 무시
      totalCase += cost; // 이동 가능하면, 비용을 더하고 노드 이동
      cur = nextNode;
    }
    // 마지막 노드에서 1로 돌아오는 것이 필수
    let cost = graph[cur][1];
    if (cost == 0) return; // 이동 불가능하면 무시
    totalCase += cost; //이동 가능하면, 비용을 더하고 노드 이동
    minValue = Math.min(minValue, totalCase); //경로의 최소 비용 저장
  }
  for (let i = 2; i <= n; i++) {
    if (visited[i]) continue;
    result.push(i);
    visited[i] = true;
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
}
