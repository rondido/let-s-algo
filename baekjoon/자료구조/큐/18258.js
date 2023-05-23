const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

class Node {
  constructor(input) {
    this.input = input;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(input) {
    const node = new Node(input);
    if (this.head === null) {
      this.head = node;
      this.head.next = null;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length += 1;
  }
  pop() {
    if (this.empty() === 1) return -1;
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.input;
  }
  size() {
    return this.length;
  }
  empty() {
    if (this.length == 0) {
      return 1;
    } else {
      return 0;
    }
  }
  front() {
    if (this.empty() == 1) return -1;
    return this.head.input;
  }
  back() {
    if (this.empty() == 1) return -1;
    return this.tail.input;
  }
}

let answer = [];
let queue = new Queue();

const command = arr.map((v) => v.split(" "));

command.forEach((v) => {
  switch (v[0]) {
    case "push":
      queue.push(v[1]);
      break;
    case "pop":
      answer.push(queue.pop());
      break;
    case "size":
      answer.push(queue.size());
      break;
    case "empty":
      answer.push(queue.empty());
      break;
    case "front":
      answer.push(queue.front());
      break;
    case "back":
      answer.push(queue.back());
      break;
  }
});

console.log(answer.join("\n"));
