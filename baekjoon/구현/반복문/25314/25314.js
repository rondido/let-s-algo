const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

const arr = [];
for (let i = 1; i <= num; i++) {
  if (i % 4 === 0) {
    arr.push("leng");
  }
}
arr.push("int");

console.log(arr.join(" "));
