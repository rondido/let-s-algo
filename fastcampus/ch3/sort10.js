const path = require("path");
const filePath = path.join(__dirname, "memo10.txt");

const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const arr = input[0].split("").map(Number);

const answer = arr.sort((a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
});

console.log(answer.join(""));
