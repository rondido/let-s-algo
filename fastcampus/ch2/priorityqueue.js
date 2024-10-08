var PriorityQueue = require("priorityqueuejs");

var queue = new PriorityQueue(function (a, b) {
  return a.cash - b.cash;
});

queue.enq({ cash: 250, name: "Valentina" });
queue.enq({ cash: 300, name: "Jano" });
queue.enq({ cash: 150, name: "Fran" });
queue.size();
queue.peek(); // { cash: 300, name: 'Jano' }
queue.deq(); // { cash: 300, name: 'Jano' }
queue.size(); // 2
