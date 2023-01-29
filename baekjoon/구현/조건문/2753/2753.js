var fs = require("fs");
//dev/stdin
var input = fs.readFileSync(__dirname + "/2753.txt").toString();

let A = Number(input);

if ((A % 4 === 0 && A % 100 != 0) || A % 400 == 0) {
  console.log(1);
} else {
  console.log(0);
}
