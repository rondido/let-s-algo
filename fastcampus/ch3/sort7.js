const path = require("path");
const filePath = path.join(__dirname, "memo7.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

arr = [...new Set(arr)];

arr.sort((a, b) => {
  if (a.length != b.length) return a.length - b.length;
  else {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
});

for (let x of arr) {
  console.log(x);
}
