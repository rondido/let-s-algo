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
    if (this.size() === 0) {
      this.storage["0"] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }
  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
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

function bfs(graph, start, visited) {
  queue = new Queue();
  queue.add(start);
  visited[start] = true;
  while (queue.size() != 0) {
    v = queue.popleft();
    console.log(v);
    for (i of graph[v]) {
      if (!visited[i]) {
        queue.add(i);
        visited[i] = true;
      }
    }
  }
}
