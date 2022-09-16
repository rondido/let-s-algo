// 모든 숫자를 아우르는 최대 공약수

function solution(A) {
  const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));
  return A.reduce((p, v) => gcd(p, v), A[0]);
}
console.log(solution([2, 4, 6]));
