var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/14681.txt")
  .toString()
  .split("\n");

let A = Number(input[0]);
let B = Number(input[1]);

if (A > 0 && B > 0) {
  console.log(1);
} else if (A < 0 && B > 0) {
  console.log(2);
} else if (A < 0 && B < 0) {
  console.log(3);
} else {
  console.log(4);
}
