function solution(a, b, c) {
  let answer = "YES",
    max;
  let total = a + b + c;
  if (a < b) max = b;
  else max = a;
  if (max < c) max = c;
  if (total - max <= max) answer = "NO";
  return answer;
}
console.log(solution(13, 33, 17));
