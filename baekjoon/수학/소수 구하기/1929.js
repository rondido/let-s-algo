const input = require("fs").readFileSync("/dev/stdin").toString();

const [m, n] = input.split(" ").map(Number);

for (let i = m; i <= n; i++) {
  isPrime(i);
}

function isPrime(num) {
  if (num === 1) return false; //1은 소수가 아님
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  console.log(num);
}
