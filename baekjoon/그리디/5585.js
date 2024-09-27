const path = require("path");
const filePath = path.join(__dirname, "memo1.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let money = 1000 - input;

const arr = [500, 100, 50, 10, 5, 1];

let answer = 0;

for (let i = 0; i < arr.length; i++) {
  let moc = parseInt(money / arr[i]);
  money -= moc * arr[i];
  answer += moc;
}

console.log(answer);
