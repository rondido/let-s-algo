var fs = require("fs");
//dev/stdin
var input = fs.readFileSync("input.txt").toString().split("\n");

let A = input[0];
let B = input[1];

console.log(A * B[2]);
console.log(A * B[1]);
console.log(A * B[0]);
console.log(A * B);
