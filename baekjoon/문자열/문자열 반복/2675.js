const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = input.shift();

for (let i = 0; i < num; i++) {
  let answer = "";
  const [strNum, str] = input[i].split(" ");
  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < strNum; k++) {
      answer += str[j];
    }
  }
  console.log(answer);
}
