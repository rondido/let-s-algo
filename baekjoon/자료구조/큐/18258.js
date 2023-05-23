const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

const que = new Queue();
const answer = [];

for (let i = 1; i <= num; i++) {
  let result = input[i].split(" ");
  switch (result[0]) {
    case "push":
      que.push(result[1]);
      break;
    case "pop":
      answer.push(que.shift() || -1);
    case "size":
      answer.push(que.length);
    case "empty":
      answer.push(que.length === 0 ? 1 : 0);
    case "front":
      answer.push(que[0] || -1);
    case "back":
      answer.push(que[que.length - 1] || -1);
  }
}

console.log(answer.join("\n"));
