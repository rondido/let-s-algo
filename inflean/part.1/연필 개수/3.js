function solution(a) {
  let answer;
  answer = Math.floor(a / 12);
  if (a % 12 !== 0) answer += 1;
  return answer;
}
console.log(solution(178));
