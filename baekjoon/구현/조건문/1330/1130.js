var fs = require("fs");
//dev/stdin
var input = fs
  .readFileSync(__dirname + "/1130.txt")
  .toString()
  .split("\n");

let A = Number(input[0]);
let B = Number(input[1]);

if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else if (A == B) {
  console.log("==");
}
