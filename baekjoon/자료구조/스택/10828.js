const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

let answer = [];

for (let i = 1; i < num; i++) {
  let result = input[i].split(" ");
  console.log(answer);
  if (result[0] === "push") {
    answer.push(result[1]);
  }

  if (result[0] === "pop") {
    if (answer.length === 0) {
      console.log(-1);
    } else {
      console.log(answer.pop());
    }
  }
  if (result[0] === "size") {
    console.log(answer.length);
  }
  if (result[0] === "empty") {
    if (answer.length === 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  }
  if (result[0] === "top") {
    let index = 0;
    if (answer.length === 0) {
      console.log(-1);
    } else {
      index = result.length - 1;
      console.log(index + "index");
      console.log(answer[index]);
    }
  }
}
