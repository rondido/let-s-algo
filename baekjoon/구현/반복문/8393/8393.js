const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

// sum = 0; num =0;
// num = 1; sum =1;
// num = 2; sum 3;
let sum = 0;
for (let i = 0; i <= num; i++) {
  sum += i;
}
console.log(sum);
