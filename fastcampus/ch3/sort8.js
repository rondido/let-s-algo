const path = require("path");
const filePath = path.join(__dirname, "memo8.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

let arr = input[1].split(" ").map(Number);

let uniqueArray = [...new Set(arr)];

uniqueArray.sort((a, b) => a - b);

let myMap = new Map();

for (let i = 0; i < uniqueArray.length; i++) {
  myMap.set(uniqueArray[i], i);
}

answer = "";

for (let x of arr) answer += myMap.get(x) + " ";
console.log(answer);
