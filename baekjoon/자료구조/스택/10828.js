const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

let stack = [];
let answer = [];
for (let i = 0; i <= num; i++) {
  let result = input[i].split(" ");
  switch (result[0]) {
    case "push":
      stack.push(result[1]);
      break;
    case "pop":
      answer.push(stack.pop() || -1);
      break;
    case "size":
      answer.push(stack.length);

      break;
    case "empty":
      answer.push(stack[0] ? 0 : 1);

      break;
    case "top":
      answer.push(stack[stack.length - 1] || -1);

      break;
  }
}

console.log(answer.join("\n"));
