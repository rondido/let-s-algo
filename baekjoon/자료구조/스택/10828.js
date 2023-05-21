const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

let stack = [];

for (let i = 1; i <= num; i++) {
  let result = input[i].split(" ");
  switch (result[0]) {
    case "pop":
      stack.push(stack.pop() || -1);
      console.log(stack);
      break;

    case "size":
      stack.push(stack.length);
      break;
    case "empty":
      stack.push(stack[0] ? 0 : 1);
      break;

    case "top":
      stack.push(stack[stack.length - 1] || -1);
      break;
    default:
      stack.push(input[i].split(" ")[1]);
      break;
  }
}

console.log(stack.join("\n"));
