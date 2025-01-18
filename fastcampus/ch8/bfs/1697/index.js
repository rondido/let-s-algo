const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const max = 100001;

let [n, k] = input[0].split(" ").map(Number);
let visited = new Array(max).fill(0);

class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }
  size() {
    if (this.storage[this.rear] === undefined) return 0;
    else return this.rear - this.front + 1;
  }
  add(value) {
    // 큐에 데이터가 아무것도 없는 경우
    if (this.size() === 0) {
      //0번 위치에 값을 넣고 포인터는 건드리지 않는다.
      // 이때 ['0']으로 키를 설정한 이유는
      // 자바스크립트 객체 object는 키 값로 오직
      //문자열과 symbol만 허용하기 때문
      this.storage["0"] = value;
    } else {
      //그 외의 경우에는 간단하게
      // rear 위치를 1만큼 늘리고 해당 위치에 값 삽입
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }
  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      // 이 부분이 없었다면 이 시점에서 front는
      // rear의 값 보다 1보다 더 큰 역설에 빠지게 되므로
      // 데이터가 없는 경우를 다시 0으로 초기화
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }
    return temp;
  }
}

function bfs() {
  queue = new Queue();
  queue.add(n);
  while (queue.size() != 0) {
    let v = queue.popleft();
    if (v == k) {
      return visited[v];
    }
    for (let nxt of [v - 1, v + 1, v * 2]) {
      if (nxt < 0 || nxt >= max) continue;
      if (visited[nxt] == 0) {
        visited[nxt] = visited[v] + 1;
        queue.add(nxt);
      }
    }
  }
}

bfs();
// console.log(bfs());
