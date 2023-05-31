const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, arr, ...nums] = input;

const numbers = nums.map((i) => Number(i));

function solution(n, arr, numbers) {
  let ASCII = 65;

  const stack = [];
  const operators = ["-", "/", "+", "*"];
  const transformer = {};

  const calculator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  for (let i = 0; i < n; i++) {
    const alphabets = String.fromCharCode(ASCII++);
    transformer[alphabets] = numbers[i];
  }

  const transform = arr
    .split(" ")
    .map((value) => (!operators.includes(value) ? transformer[value] : value));

  for (let i = 0; i < transform.length; i++) {
    let pushValue = transform[i];
    if (operators.includes(pushValue)) {
      const secoundValue = stack.pop();
      const firstValue = stack.pop();
      const calculatorFunction = calculator[pushValue];
      pushValue = calculatorFunction(firstValue, secoundValue);
    }
    stack.push();
  }
  return (Math.floor(stack[0] * 100) / 100).toFixed(2);
}

const answer = solution(m, arr, numbers);

console.log(answer);
