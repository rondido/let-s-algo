var fs = require("fs");
//dev/stdin
var input = fs.readFileSync(__dirname + "/9498.txt").toString();

let A = Number(input);

if (A >= 90) {
  console.log("A");
} else if (A >= 80) {
  console.log("B");
} else if (A >= 70) {
  console.log("C");
} else if (A >= 60) {
  console.log("D");
} else {
  console.log("F");
}
