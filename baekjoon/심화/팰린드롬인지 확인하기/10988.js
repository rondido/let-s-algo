const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const reverseString = input.split("").reverse().join("");

console.log(reverseString === input ? 1 : 0);
