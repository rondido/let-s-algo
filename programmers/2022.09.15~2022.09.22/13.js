// 최대 공약수와 최소 공배수

function solution(n, m) {
  //유클리드 호제법
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
}
