//Node():data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList() : head 와 length를 가지고 있는 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

// size() : 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function () {
  return this.length;
};

//isEmpty(): 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

// printNode() : 노드 출력
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data}  ->`);
  }
  console.log("null");
};

// append() : 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function (value) {
  let node = new Node(value);
  current = this.head;
  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }

  this.length++;
};

let ll = new LinkedList();

ll.append(1);
ll.printNode();
ll.append(10);
ll.printNode();
ll.append(100);
ll.printNode();

console.log(ll.size());
