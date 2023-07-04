const input = require("fs").readFileSync("/dev/stdin").toString();

let num = input;
let sum;
let count = 0;
while (true) {
  count++;
  sum = Math.floor(num / 10) + (num % 10);
  //Math.foolor 내림 후 input값의 나누는 값과 input의 값 나머지 10으로 sum 구하기
  num = (num % 10) * 10 + (sum % 10);
  // input % 10 의 나머지에 10을 곱하고 sum의 10 나머지 더하기
  if (input == num) {
    break;
  }
}

console.log(count);
