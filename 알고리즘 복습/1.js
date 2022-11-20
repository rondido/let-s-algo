//세가지의 값중에 제일 높은 값을 제외한 두 값의 합이 제일 높은 값보다 크면 YES
// 아니면 NO
function solution(a, b, c) {
  let answer = "YES",
    max;
  let sum = a + b + c;
  if (a < b) max = b;
  else max = a;
  if (max < c) max = c;
  if (sum - max <= max) answer = "NO";

  return answer;
}

console.log(solution(6, 15, 11));
