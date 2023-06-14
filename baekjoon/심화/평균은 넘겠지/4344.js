const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = input.shift();

for (let i = 0; i < num; i++) {
  let result = input[i].split(" ").map((el) => +el);
  let len = result.shift();
  let count = 0;
  let avg = result.reduce((v, i) => (v += i));
  avg /= len;
  for (let j = 0; j < len; j++) {
    if (result[j] > avg) {
      count++;
    }
  }
  let answer = ((count / len) * 100).toFixed(3);
  console.log(answer + "%");
}
