const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
let count = N;
let word;

for (let i = 0; i < N; i++) {
  word = input[i];
  for (let j = 0; j < word.length; j++) {
    if (word[j] != word[j + 1] && !!word.slice(j + 1).includes(word[j])) {
      count--;
      break;
    }
  }
}

console.log(count);
