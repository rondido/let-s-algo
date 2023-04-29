const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", function (line) {
  input = parseInt(line);
  rl.close();
}).on("close", function () {
  for (let i = 1; i < 10; i++) {
    let multiply = input * i;
    console.log(`${input} * ${i} = ${multiply}`);
  }
  process.exit(); // 출력과 관련된 내용 기재 (console.log같은거..)
});
