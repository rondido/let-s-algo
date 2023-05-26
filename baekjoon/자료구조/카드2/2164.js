const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const num = Number(input[0]);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;
    return node;
  }
  getHead() {
    return this.head.value;
  }
  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }
  getLength() {
    return this.length;
  }
}

const list = new LinkedList();

for (let i = 0; i < num; i++) list.push(i + 1);

for (;;) {
  if (list.getLength() === 1) break;
  list.removeHead();
  list.push(list.getHead());
  list.removeHead();
}

console.log(list.getHead());
